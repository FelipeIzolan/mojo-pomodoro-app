import React from "react";
import ipcRenderer from "renderer/scripts/ipcRenderer";
import { Container, DragContainer } from "./styles"

const Titlebar: React.FC = () => {
    return (
        <>
            <DragContainer />
            <Container>
                <li onClick={() => ipcRenderer.send("close")} />
                <li onClick={() => ipcRenderer.send("minimize")} />
            </Container>
        </>
    )
}

export default Titlebar