import shell from "./shell";

function openTab(url: string) {
    return shell.openExternal(url)
}

export default openTab