import styled from "styled-components";
import { useState } from "react";

function RenderButton({ dayData, setSelectedDays, selectedDays, habitData, setHabitData, disableSubmit }) {
  const {id, day} = dayData;
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("rgba(212, 212, 212, 1)");
  
  function selectDay(e){
    e.preventDefault();
    
    if(color !== "white"){
      setColor("white");
      setBgColor("rgba(212, 212, 212, 1)");
      
    }else{
      setColor("rgba(212, 212, 212, 1)");
      setBgColor("white");
    }
  }

  function toggle(e, id, WeekDay){
    e.preventDefault();
    const alreadySelected = selectedDays.has(id);

    if(alreadySelected){
      selectedDays.delete(id);
      setSelectedDays(new Map(selectedDays));
     
    }else{
      selectedDays.set(id);
      setSelectedDays(new Map(selectedDays.set(id, WeekDay)));
    }

    console.log(selectedDays)

    const keys = [...selectedDays.keys()];

    setHabitData({...habitData, days: keys})
  }

  return (
    <WeekDay
      color={color}
      bgColor={bgColor}
      onClick={ disableSubmit ? () => {} : (e) => {selectDay(e); toggle(e, id, day)}}
    >
      {day}
    </WeekDay>
  );
}
export default RenderButton;

const WeekDay = styled.button`
    height: 35px;
    width: 35px;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid rgba(212, 212, 212, 1);
    font-weight: 700;
    margin: 0 2px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
`;

