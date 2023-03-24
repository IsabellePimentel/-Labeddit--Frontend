import {  useEffect, useContext } from "react"
import axios from "axios"
import {GlobalContext} from "../../context/GlobalContext"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../router/coordinator"
import Header from "../../components/Header/Header"
import { StyleMainHome } from "./styleHome"

function Home(){
    const BASE_URL = "https://labbedit-isa-api.onrender.com"
    const context = useContext(GlobalContext)
    const navigate = useNavigate()




    useEffect(()=>{
        const token = window.localStorage.getItem("labeddit_token")
        if(!token){
            goToLogin(navigate)
        }
    },[])

    const buscarPosts = async()=>{
        try {
            const response = await axios.get(`${BASE_URL}/posts`,{
                headers: {
                    Authorization: window.localStorage.getItem("labeddit_token")
                }
            }) 
            context.setPosts(response.data)
            console.log("oiii")
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        console.log("oii222i")
        buscarPosts()
    },[])

    return(
        <>
        <Header/>
        <StyleMainHome>

        </StyleMainHome>
        HOME2
        </>
    )
}

export default Home