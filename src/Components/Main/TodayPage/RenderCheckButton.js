import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { BsCheckSquareFill as CheckButton } from "react-icons/bs";

import UserContext from "../../Contexts/UserData";
import CheckState from "../../Contexts/CheckState";


function RenderCheckButton({ habit, num, setDisable, disable }) {
  const { userData } = useContext(UserContext);
  const { check, setCheck } = useContext(CheckState);

  useEffect(()=>{
    setCheck({...check, clicks: num})
  }, [])

  
  function checkUnchekHabit(){
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };

      if(habit.done !== true){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`

        const body = {currentSequence: habit.currentSequence + 1,
          done: true,
          highestSequence: habit.highestSequence + 1,
          id: habit.id,
          name: habit.name
        }

        const promise = axios.post(URL, body, config)

        promise.then((response) => {
          setCheck({ ...check, clicks: check.clicks + 1 });
          setDisable(false)
        })
      }else{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`

        const body = {currentSequence: habit.currentSequence - 1,
          done: false,
          highestSequence: habit.highestSequence - 1,
          id: habit.id,
          name: habit.name
        }

        const promise = axios.post(URL, body, config)

        promise.then((response) => {
          setCheck({ ...check, clicks: check.clicks - 1 });
          setDisable(false);
      })
    } 
  }

  return (
    <ButtonContainer
      onClick={() => {
        setDisable(true);
        checkUnchekHabit();
      }}
      disabled = {disable}
      done={habit.done}
    >
      <CheckButton />
    </ButtonContainer>
  );
}

export default RenderCheckButton;

//CSS

const ButtonContainer = styled.button`
  position: absolute;
  top: 3px;
  right: 0;
  font-size: 85px;
  height: 85px;
  background: none;
  border: none;
  color: ${(props) => props.done ? "rgba(143, 197, 73, 1)" : "rgba(231, 231, 231, 1)"};
`;
