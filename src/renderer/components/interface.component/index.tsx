import React from "react";
import { Container, Button } from "./styles";
import ipcRenderer from "renderer/scripts/ipcRenderer";
import logo from "../../../../assets/icon.png"

interface Props {
    timerState: [string, React.Dispatch<string>]
    workTime: number
    restTime: number
}

const Interface: React.FC<Props> = (props) => {
    const [timerState, setTimerState] = props.timerState
    const workTime = props.workTime
    const restTime = props.restTime

    return (
        <Container>
            <img src={logo} draggable={false} />
            <Button
                onClick={
                    function () {
                        if (timerState === "START") {
                            setTimerState("STOP")
                            ipcRenderer.send("start", { restTime, workTime })
                        } else {
                            setTimerState("START")
                            ipcRenderer.send("stop")
                        }
                    }
                }
            >{timerState}</Button>
        </Container>
    )
}

export default Interface