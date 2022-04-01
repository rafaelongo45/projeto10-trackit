import styled from "styled-components";

function RenderUserHistory() {
  return (
    <Main>
      <article>
        <Header>
          <h1>Histórico</h1>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Header>
      </article>
    </Main>
  );
}

export default RenderUserHistory;

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
  margin: 120px 0 30px 0;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  h1 {
    width: 100%;
    color: rgba(18, 107, 165, 1);
    font-size: 28px;
    margin-bottom: 15px;
  }

  p {
    color: rgba(102, 102, 102, 1);
    font-size: 18px;
  }

`;
