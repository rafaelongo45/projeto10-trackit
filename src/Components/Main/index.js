import styled from "styled-components"

function RenderHabits(){
    return(
        <Main>
            <header>
                <p>Meus hábitos</p>
                <button>click me!</button>
            </header>
        </Main>
    )
}

export default RenderHabits;

//CSS
const Main = styled.main`
    background-color: rgb(229,229,229);
    width: 100vw;
    height: 100%;
`
//(229,229,229) margin-top: 10%; height: 9%;

