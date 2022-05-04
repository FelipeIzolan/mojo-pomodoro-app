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

let clockInterval: NodeJS.Timer | undefined

const Interface: React.FC<Props> = (props) => {
    const [buttonText, setButtonText] = useState("START")
    const [iconSrc, setIconSrc] = useState(icon)
    const [timerState, setTimerState] = props.timerState

    const workTime = props.workTime
    const restTime = props.restTime
    const [clock, setClock] = useState({ minutes: workTime, seconds: 0 })

    useEffect(() => setClock({ minutes: workTime, seconds: 0 }), [workTime])

    useEffect(() => {
        switch (timerState) {
            case "NORMAL":
                setClock({ minutes: workTime, seconds: 0 })
                if (clockInterval) clearInterval(clockInterval)
                setIconSrc(icon)
                setButtonText("START")
                break
            case "WORK":
                setClock({ minutes: workTime, seconds: 0 })
                if (clockInterval) clearInterval(clockInterval)
                clockInterval = setInterval(() => {
                    setClock(state => {
                        let temp = { ...state }
                        temp.seconds === 0 ?
                            (temp.seconds = 59, temp.minutes--) :
                            temp.seconds--

                        return temp
                    })
                }, 1000)

                setIconSrc(icon_work)
                setButtonText("STOP")
                break
            case "REST":
                setClock({ minutes: restTime, seconds: 0 })
                if (clockInterval) clearInterval(clockInterval)
                clockInterval = setInterval(() => {
                    setClock(state => {
                        let temp = { ...state }
                        temp.seconds === 0 ?
                            (temp.seconds = 59, temp.minutes--) :
                            temp.seconds--

                        return temp
                    })
                }, 1000)

                setIconSrc(icon_rest)
                setButtonText("STOP")
                break
            default: break
        }
    }, [timerState, buttonText])

    return (
        <Container>
            <img src={iconSrc} draggable={false} />
            <span>{clock.minutes} : {clock.seconds}</span>
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