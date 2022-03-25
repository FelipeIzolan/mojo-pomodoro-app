import { render } from "react-dom"
import React from "react"

import Titlebar from "./components/titlebar.component"
import Logo from "./components/logo.component"
import Inputs from "./components/inputs.component"
import "./index.css"

const App: React.FC = () => {
  return(
    <>
      <Titlebar />
      <div>
        <Logo />
        <Inputs />
      </div>
    </>
  )
}


render(<App />, document.getElementById('app'))
