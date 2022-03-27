import styled, { keyframes } from "styled-components"
import settings from "../../../../assets/settings.png"

interface Props {
    isOpen: boolean
}

const slide_entry = keyframes`from { left: 512px; } to { left: 0px; }`
const slide_exit = keyframes`from { left: 0px; } to { left: 512px; }`

const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    background: none;
    background-image: url(${settings});
    background-size: cover;
    border: none;
    cursor: pointer;
    z-index: 2;
    margin: 4px;
`

const Background = styled.div<Props>`
    width: 100%;
    height: calc(100vh - 16px);
    animation: 0.5s ${({ isOpen }) => isOpen ? slide_entry : slide_exit} both;
    font-family: PTSans;
    position: absolute;
    margin-top: 16px;
    color: white;
    left: 0;
    top: 0;
`

const Container = styled.div<Props>`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.5px);
    animation: 0.5s ${({ isOpen }) => isOpen ? slide_entry : slide_exit} both;
    z-index: 1;

    label { margin: 4px; }
    select {
        width: 12vw;
        background: none;
        border: none;
        color: #2e2828bb;
    }
`

const Credits = styled.div`
    position: absolute;
    font-size: 10px;
    margin: 4px;
    bottom: 0;

    i { cursor: pointer; }
`

export { Button, Background, Container, Credits }