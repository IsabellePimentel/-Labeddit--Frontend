
import { goToHome } from "../../router/coordinator"
import { StyleMainSignup, StyleSectionLoginSignup } from "./styleSignup"
import axios from "axios"
import {  useState } from "react"
import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom"

function Signup (){
    const BASE_URL = "https://labbedit-isa-api.onrender.com"

    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })
    
    const onChangeForm = (event)=>{
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const signUp = async ()=>{
        try {

            let body ={
                username: form.username,
                email: form.email,
                password: form.password,
            }
            const response = await axios.post(`${BASE_URL}/users/signup`, body)
            window.localStorage.setItem("labeddit_token", response.data.token)
            goToHome(navigate)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <Header/>
        <StyleMainSignup>
            <StyleSectionLoginSignup>
                <div>
                    <h1>Olá, boas vindas ao LabEddit ;D</h1>
                </div>
                <div>
                    <input value={form.username} name="username" onChange={onChangeForm} placeholder="Apelido"/>
                    <input value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
                    <input value={form.password} name="password" onChange={onChangeForm} placeholder="Senha"/>         
                </div>
                <div>
                    <p>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Politica de Privacidade</a></p>
                    <p>
                        <span>
                            <input className="CheckBox" type="checkbox"/>
                            <label>Eu concordo em receber e-mails sobre coisas legais no Labeddit</label>
                        </span>
                    </p>
                    <button onClick={()=>signUp()}>Cadastrar</button>
                </div>
            </StyleSectionLoginSignup>
        </StyleMainSignup>
        </>
    )


}
export default Signup