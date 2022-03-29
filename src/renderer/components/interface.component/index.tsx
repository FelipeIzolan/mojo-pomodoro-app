import React, { useState } from "react";
import { Container, Button } from "./styles";
import logo from "../../../../assets/icon.png"

const Logo: React.FC = () => {
    const [buttonState, setButtonState] = useState<string>("START")

    return (
        <Container>
            <img src={logo} draggable={false} />
            <Button>{buttonState}</Button>
        </Container>
    )
}

export default Logo