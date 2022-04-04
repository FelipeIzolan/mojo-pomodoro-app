import { createGlobalStyle } from "styled-components"

interface Props {
    theme: {
        titlebar: string,
        body: string
    }
}

const themes = {
    purpleman: { titlebar: "#533e85", body: "#2f244c" },
    greenfield: { titlebar: "#a2d5ab", body: "#85c88a" },
    dark: { titlebar: "#2b2b2b", body: "#151515" },
    candy: { titlebar: "#fad9e6", body: "#e4aec5" },
    tomato: { titlebar: "#cd1818", body: "#ff5959" }
}

const BodyColor = createGlobalStyle`
    body {
        background: ${(props: Props) => props.theme.body}
    }
`

export { themes, BodyColor }