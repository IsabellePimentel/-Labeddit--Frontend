import styled from "styled-components";

export const StyleMainSignup = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

  
    h1{
        font-weight: 600;
        font-size: 35px;
    }
    
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




export const StyleSectionLoginSignup = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 90vh;

    div{
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
        
        .CheckBox{
            height: 15px;
            width: 15px;
            margin-right: 5px;
        }
    }
`
