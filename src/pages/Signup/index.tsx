import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErros from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';

interface SignUpFormData {
    name: string;
    email: string;
    passwor: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SignUpFormData) => {
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    name: Yup.string().required('Nome Obrigatório'),
                    email: Yup.string()
                        .required('E-mail Obrigatório')
                        .email('Digite um E-mail válido'),
                    password: Yup.string().required('Senha é Obrigatória'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await api.post('/users', data);

                history.push('/');

                addToast({
                    type: 'success',
                    title: 'Cadastro efetuado com sucesso',
                    description: 'Você pode efetuar seu logon',
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErros(err);
                    formRef.current?.setErrors(errors);
                }

                addToast({
                    type: 'error',
                    title: 'Erro no Cadastro',
                    description:
                        'Ocorreu um erro ao tentar fazer cadastro, tente novamente.',
                });
            }
        },
        [addToast, history],
    );

    return (
        <Container>
            <Background />
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu Cadastro</h1>
                        <Input
                            name="name"
                            icon={FiUser}
                            type="text"
                            placeholder="Nome"
                        />
                        <Input
                            name="email"
                            icon={FiMail}
                            type="text"
                            placeholder="E-mail"
                        />
                        <Input
                            name="password"
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                        />

                        <Button type="submit">Cadastrar</Button>
                    </Form>
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para Logon
                    </Link>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignUp;
