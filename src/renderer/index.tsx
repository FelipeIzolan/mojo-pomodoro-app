import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "./scripts/localStorage";
import getProperty from "./scripts/getProperty";
import ipcRenderer from "./scripts/ipcRenderer";

import Titlebar from "./components/titlebar.component"
import Interface from "./components/interface.component"
import Settings from "./components/settings.component"

import { themes, BodyColor } from "content"
import "./index.css"

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(getLocalStorage("theme"))
  const [timerState, setTimerState] = useState<string>("START")

  const [workTime, setWorkTime] = useState<number>(getLocalStorage("workTime"))
  const [restTime, setRestTime] = useState<number>(getLocalStorage("restTime"))

  useEffect(() => {
    ipcRenderer.on("workTime", () => { console.log("workTime") })
    ipcRenderer.on("restTime", () => { console.log("restTime") })
    ipcRenderer.on("endTime", () => { console.log("endTime") })
  }, [])

  return (
    <ThemeProvider theme={getProperty(themes, theme)}>
      <BodyColor />
      <Titlebar />
      <Settings
        theme={[theme, setTheme]}
        restTime={[restTime, setRestTime]}
        workTime={[workTime, setWorkTime]}
      />
      <div>
        <Interface
          timerState={[timerState, setTimerState]}
          workTime={workTime}
          restTime={restTime}
        />
      </div>
    </ThemeProvider>
  )
}


render(<App />, document.getElementById('app'))
