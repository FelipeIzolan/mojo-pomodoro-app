import React, { useState } from "react";
import { Button, Background, Container } from "./styles";

const Settings: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return !isOpen ?
        <Button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} /> :
        (
            <Background>
                <Container isOpen={isOpen}></Container>
                <Button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} />
            </Background>
        )
}

export default Settings