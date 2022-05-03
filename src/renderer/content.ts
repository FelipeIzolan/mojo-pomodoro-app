import { createGlobalStyle } from "styled-components"

interface Props {
    theme: {
        titlebar: string,
        body: string
    }
}

const themes = {
    purpleman: { titlebar: "#55359C", body: "#3A2569" },
    greenfield: { titlebar: "#ACE9A9", body: "#9CD999" },
    dark: { titlebar: "#2B2B2B", body: "#1E1E1E" },
    candy: { titlebar: "#fAD9E6", body: "#F9C0D8" },
    tomato: { titlebar: "#D5416A", body: "#F67297" }
}

const BodyColor = createGlobalStyle`
    body { background: ${(props: Props) => props.theme.body }
`

export { themes, BodyColor }