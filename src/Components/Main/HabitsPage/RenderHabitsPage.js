import axios from "axios";
import styled from "styled-components";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

import RenderButton from "./RenderButton";
import RenderUserHabits from "./RenderUserHabits";
import UserContext from "../../Contexts/UserData";
import ClickState from "../../Contexts/ClickState";

import { BsFillPatchPlusFill as AddIcon } from "react-icons/bs";

function RenderHabitsPage() {
  const { userData } = useContext(UserContext);
  const { disableSubmit, setDisableSubmit } = useContext(ClickState);

  const [click, setClick] = useState(false);
  const [selectedDays, setSelectedDays] = useState(new Map());
  const [habitData, setHabitData] = useState({ name: "", days: [] });

  const daysArr = [
    { id: 1, day: "D" },
    { id: 2, day: "S" },
    { id: 3, day: "T" },
    { id: 4, day: "Q" },
    { id: 5, day: "Q" },
    { id: 6, day: "S" },
    { id: 7, day: "S" },
  ];

  function sendData(e) {
    e.preventDefault();

    if (habitData.days.length < 1) {
      alert("Escolha pelo menos um dia para o hábito");
      return;
    }

    setDisableSubmit(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const promise = axios.post(URL, habitData, config);

    promise.then((response) => {
      setClick(false);
      setDisableSubmit(false);
      setSelectedDays(new Map());
      setHabitData({ name: "", days: [] });
    });

    promise.catch((e) => {
      console.log(e.response);
      alert(e.response.data.details);
      setDisableSubmit(false);
    });
  }

  function addHabit() {
    return (
      <AddHabitBox>
        <Form onSubmit={sendData}>
          <input
            type="text"
            value={habitData.name}
            placeholder="nome do hábito"
            onChange={(e) =>
              setHabitData({ ...habitData, name: e.target.value })
            }
            disabled={disableSubmit}
          ></input>

          <div>
            {daysArr.map((day, index) => {
              return (
                <RenderButton
                  key={index + day}
                  dayData={day}
                  selectedDays={selectedDays}
                  setSelectedDays={setSelectedDays}
                  habitData={habitData}
                  setHabitData={setHabitData}
                  disableSubmit={disableSubmit}
                />
              );
            })}
          </div>

          <InputSubmit>
            <CancelButton
              disabled={disableSubmit}
              onClick={() => {
                setClick(false);
                setHabitData({ name: "", days: [] });
                setSelectedDays(new Map());
              }}
            >
              Cancelar
            </CancelButton>
            <SubmitButton type="submit" disabled={disableSubmit}>
              {disableSubmit ? (
                <ThreeDots color="white" height={15} width={88} />
              ) : (
                "Salvar"
              )}
            </SubmitButton>
          </InputSubmit>
        </Form>
      </AddHabitBox>
    );
  }

  return (
    <Main>
      <article>
        <Header>
          <span>Meus hábitos</span>
          <em onClick={() => setClick(true)}>
            <AddIcon />
          </em>
        </Header>

        {click ? addHabit() : ""}

        <Section>{<RenderUserHabits />}</Section>
      </article>
    </Main>
  );
}

export default RenderHabitsPage;

//CSS
const Main = styled.main`
  background-color: rgb(229, 229, 229);
  width: 100vw;
  min-height: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  article {
    width: 93vw;
  }
`;

const Header = styled.header`
  margin: 100px 0 10px 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 28px;
    color: rgba(18, 107, 165, 1);
  }

  em {
    font-size: 42px;
    color: rgba(18, 107, 165, 1);
  }
`;

const Section = styled.section`
  margin-bottom: 130px;

  p {
    color: rgba(102, 102, 102, 1);
    font-size: 18px;
  }
`;

const AddHabitBox = styled.section`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 90%;
  height: 85%;
  position: relative;

  input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid rgba(212, 212, 212, 1);
    margin-bottom: 10px;
  }

  input::placeholder {
    color: rgba(212, 212, 212, 1);
  }
`;

const InputSubmit = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    height: 40px;
    width: 100px;
    margin-left: 10px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
  }
`;

const CancelButton = styled.button`
  background-color: white;
  color: rgba(82, 182, 255, 1);
`;

const SubmitButton = styled.button`
  background-color: rgba(82, 182, 255, 1);
  color: white;
`;
