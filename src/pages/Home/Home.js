import {  useEffect,useState , useContext } from "react"
import axios from "axios"
import {GlobalContext} from "../../context/GlobalContext"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../router/coordinator"
import Header from "../../components/Header/Header"
import { StyleMainHome, Section } from "./styleHome"
import PostModal from "../../components/Modal/PostModal"
import PostCard from "../../components/Card/PostCard"

function Home(){
    const BASE_URL = "https://labbedit-isa-api.onrender.com"
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const [content, setContent] = useState('')
    useEffect(()=>{
        buscarPosts()
        },[])



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
                    Authorization: 'Bearer ' + window.localStorage.getItem("labeddit_token")
                }
            }) 
            context.setPosts(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const buscarComments = async(postId)=>{
        try {
            const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`,{
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("labeddit_token")
                }
            }) 
            context.setComments(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const inserirPost = async () =>{
        try {  

            let body = {
                content,
            }

            await axios.post(`${BASE_URL}/posts`,body,{
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("labeddit_token")
                }})  
            buscarPosts() 
            setContent('')        
        } catch (error) {
            console.log(error)
        }
    }

 
    return(
        <>
        <Header/>
        <StyleMainHome>
        {context.modal && context.actionModal === "post" ? 
                <>
                <PostModal
                postId={context.urlPost}
                buscarPosts={buscarPosts}
                buscarComments={buscarComments(context.urlPost)}
                comments={context.comments}
                /> 
                </>
                : 
                ''}


                <Section>
                    <div>
                        <input value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Escreva seu post..."/>
                        <button onClick={()=>inserirPost()}>Postar</button>
                    </div>
                    <div>
                        {
                        context.posts && context?.posts?.map((post)=> {return(
                            <PostCard key={post.id}
                            post={post}
                            buscarPosts={buscarPosts}/>
                        )})}
                    </div> 
                </Section>


        </StyleMainHome>
        </>
    )
}

export default Home