import { useEffect, useContext } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";

import UserContext from "../../Contexts/UserData";
import ClickState from "../../Contexts/ClickState";
import UserHabits from "../../Contexts/UserHabits";
import RenderButtons from "./RenderHabitButtons";

function RenderUserHabits() {
  const { disableSubmit, setDisableSubmit } = useContext(ClickState);
  const { userData } = useContext(UserContext);
  const { userHabits, setUserHabits } = useContext(UserHabits);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((response) => {
      const { data } = response;
      setUserHabits(data);
    });
  }, [disableSubmit]);

  function confirmDelete(id) {
    const confirmation = window.confirm("Realmente deseja deletar o hábito?");

    if (confirmation) {
      deleteHabit(id);
    }
  }

  function deleteHabit(habitId) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const promise = axios.delete(URL, config);

    promise.then(() => {
      setDisableSubmit(false);
    });

    promise.catch(() => {
      setDisableSubmit(true);
    });
  }

  return userHabits.length === 0 ? (
    <p>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
      começar a trackear!
    </p>
  ) : (
    userHabits.map((habit, index) => {
      return (
        <Section key={habit + index}>
          <header>
            <p>{habit.name}</p>
            <button
              onClick={() => {
                confirmDelete(habit.id);
                setDisableSubmit(true);
              }}
            >
              {" "}
              <IoTrashBinOutline />{" "}
            </button>
          </header>

          <Buttons>
            <RenderButtons days={habit.days} />
          </Buttons>
        </Section>
      );
    })
  );
}

//CSS

const Section = styled.section`
  height: 100px;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px;
  position: relative;

  header {
    width: 100%;
    display: flex;
    align-items: center;

    p {
      font-size: 20px;
      word-break: break-word;
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      background-color: white;
      border: none;
      font-size: 25px;
    }
  }
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export default RenderUserHabits;
