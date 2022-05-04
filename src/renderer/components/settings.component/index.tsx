import React, { useEffect, useState } from "react";
import { Button, Background, Container, Credits, Version, InputContainer } from "./styles";
import { setLocalStorage } from "renderer/scripts/localStorage";

import ipcRenderer from "renderer/scripts/ipcRenderer";
import openTab from "renderer/scripts/openTab";

interface Props {
    theme: [string, React.Dispatch<string>],
    restTime: [number, React.Dispatch<number>],
    workTime: [number, React.Dispatch<number>],
    timerState: string
}

const Settings: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [version, setVersion] = useState<string>("")

    const [theme, setTheme] = props.theme
    const [workTime, setWorkTime] = props.workTime
    const [restTime, setRestTime] = props.restTime
    const timerState = props.timerState

    useEffect(() => setLocalStorage("theme", theme), [theme])

    useEffect(() => {
        ipcRenderer.invoke("version")
            .then(version => setVersion(version))
    }, [])

    useEffect(() => {
        setLocalStorage("restTime", restTime)
        setLocalStorage("workTime", workTime)
    }, [workTime, restTime])

    return (
        <>
            <Button onClick={() => !isOpen && timerState === "NORMAL" ? setIsOpen(true) : setIsOpen(false)} />
            <Background isOpen={isOpen}>
                <Container isOpen={isOpen}>
                    <div>
                        <label>Theme: </label>
                        <select value={theme} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value)}>
                            <option value="purpleman">purpleman</option>
                            <option value="greenfield">greenfield</option>
                            <option value="dark">dark</option>
                            <option value="candy">candy</option>
                            <option value="tomato">tomato</option>
                        </select>
                    </div>
                    <InputContainer>
                        <label>Time: </label><br />
                        <input
                            min={1}
                            type="number"
                            placeholder="rest"
                            onChange={(e) => setRestTime(e.target.valueAsNumber || 0)}
                            value={restTime}
                        />
                        <input
                            min={1}
                            type="number"
                            placeholder="work"
                            onChange={(e) => setWorkTime(e.target.valueAsNumber || 0)}
                            value={workTime}
                        />
                    </InputContainer>
                    <Credits>
                        <h3>Created by <i onClick={() => openTab("https://github.com/FelipeIzolan")}>Felipe Izolan</i></h3>
                        <h4>Icons by <i onClick={() => openTab("https://www.flaticon.com/")}>Flaticon</i></h4>
                    </Credits>
                    <Version>{version}</Version>
                </Container>
            </Background>
        </>
    )
}

export default Settings