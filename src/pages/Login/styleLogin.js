import styled from "styled-components";


export const StyleMainLogin = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

  

    
    button{
        width: 300px;
        height: 40px;
        background: linear-gradient(100deg, #FF6589 1%, #F8B24E 90%);
        border-radius: 30px;
        border: none;
        font-weight: bold;
        font-size: 15px;
        color: white;  
    }
    button:hover{
        cursor:pointer;
        opacity: 0.8;
    }
    
    input{
        border: 1px solid LightGray;
        border-radius: 4px;
        height: 60px;
        width: 363px;
        padding-left: 4vw;
        font-weight: 400;
        font-size: 16px;
        font-family: 'Noto Sans';
        color: #323941;
    }
    input:focus{
        outline: none;
    }

    .btn-signup{
        background: #FFFFFF;
        border: 1px solid #FE7E02;
        color: #FE7E02;
    }

    
`

export const StyleSectionSignup = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;   
    div{
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
    }
`