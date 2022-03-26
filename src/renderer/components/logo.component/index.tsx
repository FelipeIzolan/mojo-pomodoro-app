import React from "react";
import { Container } from "./styles";
import logo from "../../../../assets/logo.png"

const Logo: React.FC = () => {
    return (
        <Container>
            <img src={logo} draggable={false} />
        </Container>
    )
}

export default Logo