import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4px;

    img { width: 58px; }

    h1 { 
        color: white; 
        font-family: PTSans;
        font-size: 6vw;
        margin-left: 8px;
    }
`

const Button = styled.button`
    padding: 2px 14px 2px 14px;
    margin-top: 6px;
    background: none;
    border: solid 1px white;
    transition: 0.4s;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    width: 42px;

    :hover { background: #FFFFFF36; }
`

export { Container, Button }