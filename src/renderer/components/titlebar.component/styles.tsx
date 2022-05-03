import styled from "styled-components"

const Container = styled.ul`
    flex-direction: row-reverse;
    position: absolute;
    top: 0; right: 0;
    background: ${props => props.theme.titlebar};
    padding: 4px;
    display: flex;
    width: 100%;
    z-index: 2;

    li{
        display: inline-block;
        margin-right: 5px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transition: 0.2s;
    }

    li:nth-child(1){ background: #FF7096; }
    li:nth-child(2){ background: #86FFBC; }

`

const DragContainer = styled.div`
    -webkit-app-region: drag;
    position: absolute;
    top: 0; left: 0;
    height: 16px;
    width: 86%;
`

export { Container, DragContainer }