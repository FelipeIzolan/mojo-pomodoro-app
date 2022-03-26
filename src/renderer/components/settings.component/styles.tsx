import styled, { keyframes } from "styled-components"
import settings from "../../../../assets/settings.png"

interface Props {
    isOpen: boolean
}

const slide_entry = keyframes`from { left: 512px; } to { left: 0px; }`
const slide_exit = keyframes`from { left: 512px; } to { left: 0px; }`

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

const Background = styled.div`
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 16px);
    position: absolute;
    margin-top: 16px;
    top: 0;
    left: 0;
`

const Container = styled.div<Props>`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.5px);
    animation: 1s ${({ isOpen }) => !isOpen ? slide_entry : slide_exit} both;
    z-index: 1;
`

export { Button, Background, Container }