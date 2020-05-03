import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
    background: #232329;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;

    border: 2px solid #232129;
    color: #666300;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
            animation: treme 0.1s;
            animation-iteration-count: 3;

            @keyframes treme {
                0% {
                    margin-left: 0;
                }
                25% {
                    margin-left: 5px;
                }
                50% {
                    margin-left: 0;
                }
                75% {
                    margin-left: -5px;
                }
                100% {
                    margin-left: 0;
                }
            }
        `}


    ${(props) =>
        props.isFocused &&
        css`
            border-color: #ff9000;
            color: #ff9000;
        `}

    ${(props) =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}



    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder {
            color: #666300;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    svg {
        margin-left: 16px;
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
