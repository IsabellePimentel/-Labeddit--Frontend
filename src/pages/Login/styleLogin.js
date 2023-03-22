import styled from "styled-components";


export const StyleMainLogin = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`

export const StyleSectionSignup = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 100vh;
    p{
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        margin-bottom: 1vh;
    }
    div{
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
        .signUpButton{
            background: #FFFFFF;
            border: 1px solid #FE7E02;
            color: #FE7E02;
        }
        .CheckBox{
            height: 18px;
            width: 18px;
        }
    }
`