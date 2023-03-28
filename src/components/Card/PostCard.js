import axios from "axios"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import likeImg from "../../assets/like.svg"
import dislikeImg from "../../assets/dislike.svg"
import commentImg from "../../assets/comment.svg"

function PostCard (props){
    const BASE_URL = "https://labbedit-isa-api.onrender.com"

    const context = useContext(GlobalContext)

    const abrirModal = (postId)=>{
        context.setUrlPost(postId)
        context.setModal(true)
        context.setActionModal("post")
    }

    const like = async (postId)=>{
        try {
            let body = {
                like: true,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/likedislike`,body,{
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("labeddit_token")
                }})
            props.buscarPosts()
        } catch (error) {
            console.log(error)
        }
    }

    const dislike = async (postId)=>{
        try {
            let body = {
                like: false,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/likedislike`,body,{
                headers:{
                    Authorization:'Bearer ' + window.localStorage.getItem("labeddit_token")
                }})
            props.buscarPosts()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <article>
        <p className="subText">Enviado por: {props.post.creator.creatorName}</p>
        <p>{props.post.content}</p>
        <p className="menuPost">
            <span className="subTextBold">
                <img src={likeImg} onClick={()=>like(props.post.id)} />
                {props.post.likes}
                <img src={dislikeImg} onClick={()=>dislike(props.post.id)} /> 
            </span> 
            <span className="subText" onClick={()=>abrirModal(props.post.id)}>
                <img src={commentImg}  />
                {props.post.comments}
            </span>
        </p>
    </article>
    )

}
export default PostCard
