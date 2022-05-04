/* eslint global-require: off, no-console: off, promise/always-return: off */

import path from 'path';
import { app, BrowserWindow, ipcMain, Menu, shell, Tray } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { resolveHtmlPath } from './util';
import { getVersion } from './util'

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null
let tray: Tray | null
let isActive: boolean = false
let timer: NodeJS.Timeout | null

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../assets');

const getAssetPath = (...paths: string[]): string => {
  return path.join(RESOURCES_PATH, ...paths);
};

const reset = () => {
  if (timer) clearTimeout(timer)
  timer = null
  isActive = false
  tray?.destroy()
  tray = null
  mainWindow?.webContents.send("endTime")
}

const createTray = () => {
  let tray = new Tray(getAssetPath("icon.png"))
  const contextMenu = Menu.buildFromTemplate([
    { label: "Open", click: () => mainWindow?.show() },
    { label: "Close", click: () => app.quit() }
  ])

  tray.setToolTip("Mojo")
  tray.setContextMenu(contextMenu)
  tray.on("double-click", () => mainWindow?.show())

  return tray
}

const createWindow = async () => {
  if (isDevelopment) await installExtensions();

  mainWindow = new BrowserWindow({
    title: "Mojo",
    width: 235,
    height: 150,
    resizable: false,
    frame: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    }
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'))
  mainWindow.removeMenu()

  // tray managment
  mainWindow.on("show", () => { tray?.destroy(); tray = null })
  mainWindow.on("hide", () => tray = createTray())

  // close / minimize managment
  mainWindow.on('closed', () => mainWindow = null);
  mainWindow.on("minimize", () => isActive ? (mainWindow?.hide()) : null)

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) throw new Error('"mainWindow" is not defined');

    if (process.env.START_MINIMIZED) mainWindow.minimize();
    else mainWindow.show();
  });

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });
};

ipcMain.on("close", () => mainWindow?.close())
ipcMain.on("minimize", () => mainWindow?.minimize())
ipcMain.handle("version", () => getVersion())

ipcMain.on("stop", () => reset())
ipcMain.on("start", (e, times) => {
  e.preventDefault()

  const { restTime, workTime } = times
  isActive = true
  mainWindow?.hide()
  mainWindow?.webContents.send("workTime")

  timer = setTimeout(() => {
    mainWindow?.show()
    mainWindow?.webContents.send("restTime")
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      mainWindow?.show()
      reset()
    }, restTime * 60000) // restTime
  }, workTime * 60000) // workTime
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit(); }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
