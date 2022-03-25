import React from "react";
import { Container } from "./styles";
import logo from "../../../../assets/icon.png"

const Logo: React.FC = () => {
    return (
        <Container>
            <img src={logo} />
            <h1>Mojo</h1>
        </Container>
    )
}

export default Logo