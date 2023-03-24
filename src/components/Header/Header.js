import { useNavigate, useLocation } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext } from "react"
import { goToLogin } from "../../router/coordinator"
import { StyleHeader } from "./StyleHeader"
import logo from "../../assets/logo.svg"

function Header() {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const location = useLocation()

        const logout = ()=>{
            localStorage.clear()
            goToLogin(navigate)
        }


        return (
            <StyleHeader>
              
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
