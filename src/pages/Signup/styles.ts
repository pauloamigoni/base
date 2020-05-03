import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpBackgroungImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 700px;
`;

const apperarFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${apperarFromRight} 1s;

    form {
        margin: 10px 0;
        width: 340px;
        text-align: center;

            font-size: 18px;
            margin-bottom: 12px;
            font-family: 'Bebas Neue', cursive;
        }

        h1 {
            margin-bottom: 14px;
            font-family: 'Bebas Neue', cursive;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            /* font-family: 'Bebas Neue', cursive; */
            font-family: 'Nunito Sans', sans-serif;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 10px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        /* font-family: 'Bebas Neue', cursive; */
        font-family: 'Nunito Sans', sans-serif;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroungImg}) no-repeat center;
    background-size: cover;
`;
