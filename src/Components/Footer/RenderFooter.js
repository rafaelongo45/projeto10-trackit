import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import CheckState from "../Contexts/CheckState";
import "react-circular-progressbar/dist/styles.css";

function RenderFooter() {
  const { check } = useContext(CheckState);
  console.log(check);

  return (
    <Footer>
      <Link to="/habitos">Hábitos</Link>

      <Link to="/hoje">
        <Div>
          <CircularProgressbar
            value={check.clicks}
            maxValue={check.size === 0 ? 1 : check.size}
            text={"Hoje"}
            background
            backgroundPadding={7}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              textSize: "22px",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </Div>
      </Link>

      <Link to="/historico">Histórico</Link>
    </Footer>
  );
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
  display: flex;
  justify-content: space-between;
  padding: 0 35px;
  align-items: center;
  background-color: white;

  a {
    font-size: 18px;
    color: rgba(82, 182, 255, 1);
    text-decoration: none;
  }
`;

const Div = styled.div`
  width: 100px;
  height: 150px;
`;
