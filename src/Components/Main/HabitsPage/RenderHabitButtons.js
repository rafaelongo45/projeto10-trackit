import styled from "styled-components";

function RenderButtons({ days }) {
  let changeColor = false;
  const weekDays = [
    { id: 7, day: "D" },
    { id: 1, day: "S" },
    { id: 2, day: "T" },
    { id: 3, day: "Q" },
    { id: 4, day: "Q" },
    { id: 5, day: "S" },
    { id: 6, day: "S" },
  ];

  return weekDays.map((day, index) => {
    changeColor = false;

    for (let i = 0; i < days.length; i++) {
      if (days[i] === day.id) {
        changeColor = true;
      }
    }
    return (
      <Button key={day + index} changeColor={changeColor}>
        {" "}
        {day.day}{" "}
      </Button>
    );
  });
}

export default RenderButtons;

//css

const Button = styled.button`
  height: 30px;
  width: 30px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid rgba(212, 212, 212, 1);
  font-weight: 700;
  margin-right: 5px;
  color: ${(props) => (props.changeColor ? "white" : "rgba(212, 212, 212, 1)")};
  background-color: ${(props) =>
    props.changeColor ? "rgba(212, 212, 212, 1)" : "white"};
`;
