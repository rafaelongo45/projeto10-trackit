import styled from "styled-components";

import RenderCheckButton from "./RenderCheckButton";

function RenderHabit({ habits }) {
  let num = 0;
  console.log(habits);

  return (
    <>
      {habits.map((habit, index) => {
        const newHabit = habit;

        if (habit.done) {
          num++;
        }

        return (
          <Section key={habit.id + index}>
            <Div>
              <HabitData
                current={habit.currentSequence}
                highest={habit.highestSequence}
              >
                <h1> {habit.name}</h1>
                <p>
                  Sequência atual:{" "}
                  <span>
                    {habit.currentSequence}{" "}
                    {habit.currentSequence === 1 ? "dia" : "dias"}
                  </span>
                </p>
                <p>
                  Seu recorde:{" "}
                  <span>
                    {habit.highestSequence}{" "}
                    {habits.highestSequence === 1 ? "dia" : "dias"}
                  </span>
                </p>
              </HabitData>

              <RenderCheckButton habit={newHabit} num={num} />
            </Div>
          </Section>
        );
      })}
    </>
  );
}

export default RenderHabit;

//CSS

const Section = styled.section`
  height: 120px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  width: 92%;
  height: 90px;
  margin: auto;
  position: relative;
`;

//rgba(143, 197, 73, 1) -  cor botao V

const HabitData = styled.section`
  width: 75%;
  height: 100%;
  color: rgba(102, 102, 102, 1);

  h1 {
    font-size: 22px;
    margin: 5px 0 15px 0;
    word-break: break-word;
  }

  p {
    margin: 5px 0;
    font-size: 14px;

    span {
      color: ${(props) =>
        props.highest === props.current && props.current !== 0
          ? "rgba(143, 197, 73, 1)"
          : "rgba(102, 102, 102, 1)"};
    }
  }
`;
