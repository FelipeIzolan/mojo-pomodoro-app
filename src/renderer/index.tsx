import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { getLocalStorage } from "./scripts/localStorage";
import getProperty from "./scripts/getProperty";

import Titlebar from "./components/titlebar.component"
import Logo from "./components/logo.component"
import Inputs from "./components/inputs.component"
import Settings from "./components/settings.component"

import { themes, BodyColor } from "content"
import "./index.css"

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(getLocalStorage("theme"))
  const [workTime, setWorkTime] = useState<number>(getLocalStorage("workTime"))
  const [restTime, setRestTime] = useState<number>(getLocalStorage("restTime"))

  return (
    <ThemeProvider theme={getProperty(themes, theme)}>
      <BodyColor/>
      <Titlebar />
      <Settings theme={[theme, setTheme]} restTime={[restTime, setRestTime]} workTime={[workTime, setWorkTime]} />
      <div>
        <Logo />
        <Inputs />
      </div>
    </ThemeProvider>
  )
}


render(<App />, document.getElementById('app'))
