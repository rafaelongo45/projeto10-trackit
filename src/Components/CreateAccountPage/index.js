import axios from 'axios';
import styled from "styled-components";
import { useState } from "react";
import { ThreeDots } from  'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../Assets/img/logo.svg";

function CreateAccountPage() {
    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);
    const [userData, setUserData] = useState({ email: "", name: "", image: "", password: "" });

  function sendData(e){
        e.preventDefault();

        setDisabled(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const promise = axios.post(URL, userData);
        
        promise.then(response =>{
            const {data} = response;
            console.log(data);
            navigate('/');
        })

        promise.catch((error) => {
            console.log(error.response);
            alert("Opa! Parece que deu xabu em!");  
            setDisabled(false);
        });


    }

    return (
        <>
            <PageLogo>
                <img src={Logo} alt="Page Logo" />
            </PageLogo>

            <Form onSubmit={sendData}> 

                <input 
                required 
                type="email" 
                placeholder="email" 
                disabled = {disabled}
                onChange={(e)=>{setUserData({...userData, email: e.target.value})}}>
                </input>
                
                <input 
                required 
                type="password" 
                placeholder="senha" 
                disabled = {disabled}
                onChange={(e)=>{setUserData({...userData, password: e.target.value})}}>
                </input>

                <input 
                required 
                type="text" 
                placeholder="nome" 
                disabled = {disabled}
                onChange={(e)=>{setUserData({...userData, name: e.target.value})}}>
                </input>

                <input 
                required 
                type="url" 
                placeholder="foto" 
                disabled = {disabled}
                onChange={(e)=>{setUserData({...userData, image: e.target.value})}}>
                </input>
                
                {
                    disabled ? 
                    <button type="submit"><ThreeDots color="white" height={80} width={80}/></button> 
                    : 
                    <button type="submit">Cadastrar</button>
                }
            </Form>

            <CreateAccountLink >
                <Link to="/">Já tem uma conta? Faça login!</Link>
            </CreateAccountLink>

        </>

    )
}

export default CreateAccountPage;


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
        font-size: 24px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    input::placeholder{
        font-size: 18px;
        font-weight: 500;
        color: rgba(212, 212, 212, 1);
    }
`;

const CreateAccountLink = styled.section`
    text-align: center;
    margin-top: 20px;

    a{
        color: rgba(82, 182, 255, 1);
    }
`;