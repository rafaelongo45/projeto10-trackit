import styled from "styled-components";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function RenderFooter() {
  return (
    <Footer>
      <Link to="/habitos">Hábitos</Link>

      <Link to="/hoje">
        <Div>
          <CircularProgressbar
            value={80}
            text={"Hoje"}
            background
            backgroundPadding={7}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              textSize: '22px',
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
