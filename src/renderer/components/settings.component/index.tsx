import React, { useEffect, useState } from "react";
import { Button, Background, Container, Credits } from "./styles";
import { setLocalStorage } from "renderer/scripts/localStorage";
import openTab from "renderer/scripts/openTab";

interface Props {
    theme: [string, React.Dispatch<string>]
}

const Settings: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [theme, setTheme] = props.theme

    useEffect(() => {
        setLocalStorage("theme", theme)
    }, [theme])

    return (
        <>
            <Button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} />
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
                    <Credits>
                        <h3>Created by <i onClick={() => openTab("https://github.com/FelipeIzolan")}>Felipe Izolan</i></h3>
                        <h4>Icons by <i onClick={() => openTab("https://www.flaticon.com/")}>Flaticon</i></h4>
                    </Credits>
                </Container>
            </Background>
        </>
    )
}

export default Settings