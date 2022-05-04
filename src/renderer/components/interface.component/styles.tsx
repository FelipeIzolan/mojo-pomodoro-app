import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: PTSans;
    color: white;

    img { width: 52px; }
    span { font-size: small; }
`

const Button = styled.button`
    background: none;
    border: none;
    color: white;
    padding: 1px 9px;
    cursor: pointer;
    margin-top: 2px;
    border-radius: 2px;
    border: 1px solid white;
    font-size: 10px;
`

export { Container, Button }