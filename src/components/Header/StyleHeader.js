import styled from "styled-components";

export const StyleHeader = styled.header`
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: LightGray;

    a{
        color: #00F;
        text-decoration: none;
    }
    a:hover{
        color: #F00;
        cursor: pointer;
    }
`