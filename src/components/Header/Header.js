import { useNavigate, useLocation } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext } from "react"
import { goToLogin } from "../../router/coordinator"
import { StyleHeader } from "./StyleHeader"
import logo from "../../assets/logo.svg"
import xmodal from "../../assets/x-modal.svg"

function Header() {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const location = useLocation()

        const logout = ()=>{
            localStorage.clear()
            goToLogin(navigate)
        }
        const closeModal = ()=>{
            context.setModal(false)
            context.setActionModal("")
            context.setUrlPost('')
        }

        return (
            <StyleHeader>
              
            <div>
            {context.modal && context.actionModal ==="post" ?
                <img src={xmodal} alt="botão-fechar" onClick={()=>closeModal()}/>
                :
                ''}         
            </div>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    {location.pathname === "/signup"?
                    <h2><a onClick={()=>goToLogin(navigate)}>Entrar</a></h2>
                    :
                    <h2><a onClick={()=>logout()}>Logout</a></h2>
                    }
                    
                </div>
            </StyleHeader>
        )


}

export default Header
