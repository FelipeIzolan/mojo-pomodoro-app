import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4px;

    img { width: 16vw; }
    h1 { 
        color: white; 
        font-family: PTSans;
        font-size: 6vw;
        margin-left: 8px;
    }
`

const Button = styled.button`
    background: none;
    border: 1px solid white;
    color: white;
    padding: 2px 8px;
    margin-top: 8px;
    cursor: pointer;
    transition: 0.2s;

    :hover{
        border-top-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`

export { Container, Button }