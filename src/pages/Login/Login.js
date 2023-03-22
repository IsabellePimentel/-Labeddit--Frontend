import { StyleMainLogin, StyleSectionSignup } from "./styleLogin"
import logo from "../../assets/logoLabEddit.svg"
import {  useState } from "react"
import axios from "axios"
import {  goToHome } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"
import {  useEffect } from "react"

function Login(){
    const BASE_URL = "https://labbedit-isa-api.onrender.com"

    const navigate = useNavigate()


    const [form, setForm] = useState({email:'',password:''})

    useEffect(()=>{
        const token = window.localStorage.getItem("labeddit_token")
        if(token){
            goToHome(navigate)
        }
    },[])

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    const logar = async ()=>{
        try {
            let body ={
                email: form.email,
                password: form.password,
            }

            const response = await axios.post(`${BASE_URL}/users/login`, body)
            console.log("response", response)
            
            window.localStorage.setItem("labeddit_token", response.data.token)

            if(response.data.token !== undefined){
                goToHome(navigate)
            } 
        } catch (error) {
            console.log(error)
            //Daniel: criar modal com o status 404 (senha incorreta)
        }
    }
    
    return(
        <>
        <StyleMainLogin>
            <StyleSectionSignup>
                <div>
                    <img src={logo} alt="Logo"/>
                    <h3>O projeto de rede social da Labenu</h3>
                </div>
                <div>
                    <input value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
                    <input value={form.password} name="password" onChange={onChangeForm} type="password" placeholder="Senha"/>
                </div>
                <div>
                    <button onClick={()=>logar()}>Continuar</button>
                </div>
            </StyleSectionSignup>
        </StyleMainLogin>
        </>
    )

}
export default Login