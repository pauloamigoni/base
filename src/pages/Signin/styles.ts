import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroungImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;


    width: 100%;
    max-width: 700px;

    form{
        margin: 40px 0;
        width: 340px;
        text-align: center;

        span{
            font-size:18px;
            margin-bottom: 12px;
            font-family: 'Bebas Neue', cursive;
        }

        h1{
            margin-bottom: 24px;
            font-family: 'Bebas Neue', cursive;
        }





        a{
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            /* font-family: 'Bebas Neue', cursive; */
            font-family: 'Nunito Sans', sans-serif;

            &:hover{
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

            &:hover{
               color: ${shade(0.2, '#ff9000')};
            }



        }

    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroungImg}) no-repeat center;
    background-size: cover;
`;
