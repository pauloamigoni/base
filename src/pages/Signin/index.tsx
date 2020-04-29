import React from "react";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';
import Clock from '../../lib/clock';

import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => (
    <Container>
        <Content>
            
            <img src={logoImg} alt="GoBarber"/>
            <form>
                <Clock/>
                <h1>Faça seu Logon</h1>
                <input type="mail" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
               
            </form>
                <a href="login">
                    <FiUserPlus />
                Criar Conta</a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;