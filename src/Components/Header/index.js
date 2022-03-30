import styled from "styled-components";

import Donkey from "../../Assets/img/donkey.jpg"

function RenderHeader (){
    return (
        <Header> 
            <p>
                TrackIt
            </p>

            <img src={Donkey} alt = "Hey shrek i'm donkey"/>
        </Header>
    )

}

export default RenderHeader;

//CSS

const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgba(18, 107, 165, 1);
    box-shadow: 0px 10px 9px rgba(0, 0, 0, 0.15);

    p{
        font-family: 'Playball', cursive;
        color: white;
        font-size: 40px;
        margin-left: 15px;
    }

    img{
        border-radius: 50%;
        width: 55px;
        height: 55px;
        margin-right: 15px;
    }
`