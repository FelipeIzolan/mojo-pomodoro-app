import styled from "styled-components"

interface ContainerProps{
    border: { px: number, color: string },
    padding: number,
    color: string
}

const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 21px;

    input, button{
        background: none;
        padding: ${props => `${props.padding / 2}px ${props.padding}px`};
        color: ${props => `${props.color}`};
        border: ${props => `${props.border.px}px ${props.border.color} solid`};
    }

    input{ border-top-left-radius: 6px; }
    button{ border-bottom-right-radius: 6px; cursor: pointer; }

    input::placeholder{ color: #ffffff96;}
`

export { Container }