import styled from 'styled-components';
import { shade } from 'polished';



export const ClockStyle = styled.div`
   
        font-size: 11px;
        margin-top: 16px;
        font-family: 'Nunito Sans', sans-serif;
        /* text-transform: uppercase; */
        background-color: #666173;
        padding: 5px 15px 5px 15px;
        border-radius: 20px;
        border: 0;
        transition: background-color 0.2s;
        /* animation: go-back 6s infinite alternate; */


        &:hover {
        background: ${shade(0.2, '#666173')};
    }



    @keyframes go-back {
    from {
        transform: translateX(100px);
    }
    to {
        transform: translateX(-100px);
    }


   
`;
