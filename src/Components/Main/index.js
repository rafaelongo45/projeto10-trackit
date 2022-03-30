import styled from "styled-components"

import { BsFillPatchPlusFill as AddIcon} from 'react-icons/bs';

function RenderHabits(){
    return(
        <Main>
            <Section>
                <span>Meus hábitos</span>
                <em><AddIcon /></em>
                
            </Section>
        </Main>
    )
}

export default RenderHabits;

//CSS
const Main = styled.main`
    background-color: rgb(229,229,229);
    width: 100vw;
    min-height: 100%;
    position:absolute;
    z-index: 0;
    top:0;
    left:0;
    display:flex;
    justify-content: center;
`
const Section = styled.section`
    margin-top: 100px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;

    span{
        margin-left: 10px;
        font-size: 25px;
        color: rgba(18, 107, 165, 1);
    }

    em{
        margin-right: 10px;
        font-size: 42px;
        color: rgba(18, 107, 165, 1);
    }
`
