import React from 'react';
import { FiUserPlus, FiMail, FiLock } from 'react-icons/fi';
import Clock from '../../lib/clock';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />
            <form>
                <Clock />
                <h1>Faça seu Logon</h1>
                <Input
                    name="email"
                    icon={FiMail}
                    type="mail"
                    placeholder="E-mail"
                />
                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="login">
                <FiUserPlus />
                Criar Conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
