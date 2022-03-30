import { Link } from "react-router-dom";
import styled from "styled-components"

function RenderFooter(){
    return (
        <Footer>
            <Link to ="/habitos">Hábitos</Link>

            <Link to ="/habitos">Histórico</Link>
        </Footer>
    )
}

export default RenderFooter;

//CSS

const Footer = styled.footer`
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 9%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    a{
        font-size: 18px;
        color: rgba(82, 182, 255, 1);
        text-decoration: none;
    }
`