import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypeVariations = {
    info: css`
        background: #ebf8ff;
        color: #3172b7;
    `,

    success: css`
        background: #e6fffa;
        color: #2e656a;
    `,

    error: css`
        background: #fddede;
        color: #c53030;
    `,
};

const toastTypeVariationsButtom = {
    info: css`
        background: #3172b7;
        color: #ebf8ff;
    `,

    success: css`
        background: #2e656a;
        color: #e6fffa;
    `,

    error: css`
        background: #c53030;
        color: #fddede;
    `,
};

interface ContainerProps {
    type?: 'success' | 'error' | 'info';
    hasDescription: boolean;
}

export const Container = styled(animated.div)<ContainerProps>`
    width: 460px;
    position: relative;
    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    & + div {
        margin-top: 2px;
    }
    ${(props) => toastTypeVariations[props.type || 'info']}

    > svg {
        margin: 4px 12px 0 0;
    }

    div {
        flex: 1;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        opacity: 0.8;
        line-height: 20px;
    }

    button {
        position: absolute;
        right: 16px;
        top: 20px;
        border: 0;
        background: transparent;
        color: inherit;
    }

    ${(props) =>
        !props.hasDescription &&
        css`
            align-items: center;
            svg {
                margin-top: 0;
            }
        `}
`;

export const BodyContaniner = styled.div`
    margin: 0px;
    padding: 5vmin 5vmin 5vmin 5vmin;
    text-align: right;
    font-family: 'Lato', sans-serif;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-style: italic;
    /* -webkit-font-smoothing: antialiased; */
    & + div {
        margin-top: 2px;
    }
`;

export const Body = styled.div`
    position: relative;
    left: 0px;
    top: 0px;
    padding-right: 10px;
    /* width: 100vw;
    height: 100vh; */
    /* background-size: cover; */
    font-family: 'Lato', sans-serif;
    & + div {
        margin-top: 2px;
    }
  }


    `;

export const PopUp = styled.div`
    display: inline-block;
    width: 21vmin;
    height: 21vmin;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: -16vmin;
    top: -1vmin;
    border: 1vmin solid #fff;
    font-family: 'Lato', sans-serif;
    & + div {
        margin-top: 2px;
    }
    img {
        height: 22vmin;
        margin-left: -38%;
    }

    > img {
    }
`;

export const Message = styled.div<ContainerProps>`
    background: #ffe271;
    padding: 2vmin 5vmin 2vmin 10vmin;
    border-radius: 0px 50px 50px 0px;
    font-size: 2.8vmin;
    text-align: left;
    font-family: 'Lato', sans-serif;
    ${(props) => toastTypeVariations[props.type || 'info']}
`;

export const User = styled.div<ContainerProps>`
    text-align: left;
    padding: 10px 20px 3px 50px;
    border-radius: 0px 0px 20px;
    font-size: 3.2vmin;
    background: #fddede;
    color: #83aebd;
    display: inline-block;
    float: left;
    font-weight: 600;
    font-style: normal;
    font-family: 'Lato', sans-serif;

    button {
        /* position: absolute; */
        /* right: 16px;
        top: 20px; */
        top: 30px;
        border: 0;
        background: transparent;
        color: inherit;
    }
    ${(props) => toastTypeVariationsButtom[props.type || 'info']}
`;

export const Chat = styled.div`
    position: relative;
    display: inline-block;
    width: 40vw;
    min-width: 400px;
    max-width: 80%;
    font-family: 'Lato', sans-serif;
    animation: popFromBottom 0.5s ease-in-out;

  @keyframes popFromBottom {
    0% {
      transform: translateY(300px) scale(0);
    }

    100% {
      transform: translateY(0px) scale(1);
    }
`;
