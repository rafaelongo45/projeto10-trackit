import axios from "axios";
import dayjs from "dayjs";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import CheckState from "../../Contexts/CheckState";
import RenderHabit from "./RenderHabit";
import UserContext from "../../Contexts/UserData";

require('dayjs/locale/pt-br');
dayjs.locale('pt-br');

function RenderTodayPage() {
  const { userData } = useContext(UserContext);
  const { check, setCheck } = useContext(CheckState);

  const [habitsToday, setHabitsToday] = useState([]);
  const [disable, setDisable] = useState(false);
  
  const day = dayjs().format('dddd, DD/MM');
  let dayStr = day[0].toUpperCase() + day.slice(1);
  dayStr = dayStr.replace('-feira', '')

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    setDisable(true);

    const promise = axios.get(URL, config);

    promise.then((response) => {
      setHabitsToday(response.data);
      setCheck({...check, size: habitsToday.length })
      setDisable(false);
    });
  }, [check.clicks]);

  return (
    <Main>
      <article>
        <Header>
          <p>{dayStr}</p>
          {
            check.clicks < 1 ? <span>Nenhum hábito concluído ainda</span> : <em>{Math.ceil(check.clicks/check.size * 100)}% dos hábitos concluídos</em> 
          }
        </Header>

        <RenderHabit habits={habitsToday} disable = {disable} setDisable = {setDisable}/>
      </article>
    </Main>
  );
}

export default RenderTodayPage;


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
    margin-bottom: 130px;
  }
`;

const Header = styled.header`
  margin: 120px 0 30px 0;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  p {
    width: 100%;
    color: rgba(18, 107, 165, 1);
    font-size: 28px;
    margin-bottom: 10px;
  }

  span {
    color: rgba(186, 186, 186, 1);
    font-size: 18px;
  }

  em{
    color:rgba(143, 197, 73, 1);
  }
`;
