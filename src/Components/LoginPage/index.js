import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


import Logo from "../../Assets/img/logo.svg"

function LoginPage() {
    const navigate = useNavigate();

    function changePage() {
        navigate("/habitos");
    }

    return (
        <>
            <PageLogo>
                <img src={Logo} alt="Page Logo" />
            </PageLogo>

            <Form onSubmit={changePage}>
                <input type="email" placeholder="email" ></input>
                <input type="password" placeholder="senha" ></input>
                <button type="submit">Entrar</button>
            </Form>

            <LoginPageLink >
                <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
            </LoginPageLink>

        </>

    )
}

export default LoginPage;


//CSS

const PageLogo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:30%;

    img{
        width: 70%;
    }
`;

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
    margin-top: 15%;

    input{
        padding-left: 10px;
    }


    input, button{
        margin-bottom: 5px;
        width: 100%;
        height: 50px;
        border: solid 1px rgba(212, 212, 212, 1);
        border-radius: 8px;

    }
    
    button{
        background-color: rgba(82, 182, 255, 1);
        color: white;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
    }

    input::placeholder{
        font-size: 18px;
        font-weight: 500;
        color: rgba(212, 212, 212, 1);
    }
`;

const LoginPageLink = styled.section`
    text-align: center;
    margin-top: 20px;

    a{
        color: rgba(82, 182, 255, 1);
    }
`;