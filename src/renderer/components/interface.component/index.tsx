import React, { useEffect, useState } from "react";
import { Container, Button } from "./styles";
import ipcRenderer from "renderer/scripts/ipcRenderer";
import icon from "../../../../assets/icon.png";
import icon_work from "../../../../assets/icon_work.png"
import icon_rest from "../../../../assets/icon_rest.png"

interface Props {
    timerState: [string, React.Dispatch<string>]
    workTime: number
    restTime: number
}

const Interface: React.FC<Props> = (props) => {
    const [buttonText, setButtonText] = useState<string>("START")
    const [iconSrc, setIconSrc] = useState(icon)
    const [timerState, setTimerState] = props.timerState
    const workTime = props.workTime
    const restTime = props.restTime

    useEffect(() => {
        switch (timerState) {
            case "NORMAL":
                setIconSrc(icon)
                setButtonText("START")
                break
            case "WORK":
                setIconSrc(icon_work)
                setButtonText("STOP")
                break
            case "REST":
                setIconSrc(icon_rest)
                setButtonText("STOP")
                break
            default: break
        }
    }, [timerState, buttonText])

    return (
        <Container>
            <img
                src={iconSrc}
                draggable={false}
            />
            <Button
                onClick={
                    function () {
                        switch (timerState) {
                            case "NORMAL":
                                setTimerState("WORK")
                                ipcRenderer.send("start", { restTime, workTime })
                                break
                            case "WORK":
                                setTimerState("NORMAL")
                                ipcRenderer.send("stop")
                                break
                            case "REST":
                                setTimerState("NORMAL")
                                ipcRenderer.send("stop")
                                break
                            default: break
                        }
                    }
                }
            >{buttonText}</Button>
        </Container>
    )
}

export default Interface