import styled from "styled-components"

const Container = styled.ul`
    flex-direction: row-reverse;
    position: absolute;
    top: 0; right: 0;
    background: #79e791;
    padding: 4px;
    display: flex;
    width: 100%;

    li{
        display: inline-block;
        margin-right: 6px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transition: 0.2s;
    }

    li:nth-child(1){ background: #f14f4f; }
    li:nth-child(2){ background: #2bcd63; }
    li:nth-child(1):hover{ background: #ff6363; }
    li:nth-child(2):hover{ background: #3cfc7f; }
`

const DragContainer = styled.div`
    -webkit-app-region: drag;
    position: absolute;
    top: 0; left: 0;
    height: 16px;
    z-index: 1;
    width: 93%;
`

export { Container, DragContainer }