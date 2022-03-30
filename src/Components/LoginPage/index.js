import axios from 'axios';
import styled from "styled-components";
import { ThreeDots } from  'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';

import Logo from "../../Assets/img/logo.svg";
import UserContext from '../Contexts/UserData';

function LoginPage() {
    const navigate = useNavigate();

    const {userData, setUserData} = useContext(UserContext);

    const [disabled, setDisabled] = useState(false);

    function sendData(e) {
        e.preventDefault();
        
        setDisabled(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const promise = axios.post(URL, userData);

        promise.then(response =>{
            const {data} = response;
            navigate("/hoje");
            setUserData(data);
        })

        promise.catch(e => {
            console.log(e.response);
            alert("Opa! Parece que deu xabu em!");
            setDisabled(false);
        })
    }

    return (
        <>
            <PageLogo>
                <img src={Logo} alt="Page Logo" />
            </PageLogo>

            <Form onSubmit={sendData}>
                <input 
                type="email" 
                placeholder="email"
                disabled = {disabled}
                onChange={(e)=>{setUserData({...userData, email: e.target.value})}}>  
                </input>

                <input 
                type="password" 
                placeholder="senha"
                disabled = {disabled}
                onChange={(e)=>{setUserData({...userData, password: e.target.value})}}>  
                </input>
                
                {
                    disabled ?
                    <button type="submit"><ThreeDots color="white" height={80} width={80} /></button>
                    :
                    <button type="submit">Entrar</button>
                }
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
        display:flex;
        justify-content: center;
        align-items: center;
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