import React, { useEffect, useState } from "react"
import { Container } from "./styles"

const Inputs: React.FC = () => {
    const [text, setText] = useState<string>("")
    
    return(
        <Container border={{px: 1, color: "#FFFFFF"}} padding={8} color={"white"}>
            <input type={"text"} placeholder="Type a reminder" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
            <button>START</button>
        </Container>
    )
}

export default Inputs