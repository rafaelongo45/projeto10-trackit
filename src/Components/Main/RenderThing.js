import {useState} from 'react'
import styled from 'styled-components'

function RenderButtons({days}){
    const [bgColor, setBgColor] = useState("white");
    const [color, setColor] = useState("rgba(212, 212, 212, 1)");

    const weekDays = [
        { id: 1, day: "D" },
        { id: 2, day: "S" },
        { id: 3, day: "T" },
        { id: 4, day: "Q" },
        { id: 5, day: "Q" },
        { id: 6, day: "S" },
        { id: 7, day: "S" },
    ];

    let idArrays = [];

    for(let i = 0; i < weekDays.length; i++){
        idArrays.push(weekDays[i].id);
    }

    console.log(days);

    return (
        weekDays.map((day, index)=>{
            return(
                <Button key = {day + index} color = {color} bgColor = {bgColor}> {day.day} </Button>
            )
        })  
    )
}


export default RenderButtons

//css

const Button = styled.button`
    height: 30px;
    width: 30px;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid rgba(212, 212, 212, 1);
    font-weight: 700;
    margin-right: 5px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};


`