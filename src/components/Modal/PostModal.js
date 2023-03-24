import Header from "../Header/Header"
import { MainModal, StyleSection } from "./stylePostModal"
import axios from "axios"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import likeImg from "../../assets/like.svg"
import dislikeImg from "../../assets/dislike.svg"
import commentImg from "../../assets/comment.svg"
import { useEffect, useState } from "react"



function PostModal(props){
    const BASE_URL = "https://labbedit-isa-api.onrender.com"

    const context = useContext(GlobalContext)
    const [post, setPost] = useState({})
    const [comments, setComments] = useState({})
    const [content, setContent] = useState('')

  

    const buscarPosts = async()=>{
        try {
            const response = await axios.get(`${BASE_URL}/posts/${context.urlPost}`,{
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("labeddit_token")
                }})
            setPost(response.data[0])
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(()=>{
        buscarPosts()
    },
    [])

    const like = async (postId)=>{
        try {
            let body = {
                like: true,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/likedislike`,body,{
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("labeddit_token")
                }})
                buscarPosts()
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
                    Authorization:'Bearer ' +  window.localStorage.getItem("labeddit_token")
                }})
                buscarPosts()
                props.buscarPosts()
        } catch (error) {
            console.log(error)
        }
    }

    const insertNewComment = async () =>{
        try {          
            let body = {
                content,
            }
            await axios.post(`${BASE_URL}/posts/${context.urlPost}/comments`,body,{
                headers:{
                    Authorization: 'Bearer ' + window.localStorage.getItem("labeddit_token")
                }})         
            setContent('')
            buscarPosts()
            props.buscarPosts()
            } catch (error) {
            console.log(error)
        }
    }

    return(
        <>         
            <MainModal>
                <Header/>
                <StyleSection>
                    <div>
                        <article>
                            <p className="subText">Enviado por: {post && post?.creator?.creatorName}</p>
                            <p>{post?.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={likeImg} onClick={()=>like(post.id)} />
                                    { /*post.likes */}
                                    <img src={dislikeImg} onClick={()=>dislike(post.id)} /> 
                                </span> 
                                <span className="subText">
                                    <img src={commentImg}  />
                                    { /* post.comments */}
                                </span>
                            </p>
                        </article>
                        <input value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Escreva seu post..."/>
                        <button onClick={()=>{insertNewComment()}}>Responder</button>
                    </div>

                    <div>
                        {props.comments && props.comments?.map((comment)=>{return(
                        <article key={comment.id}>
                            <p className="subText">Enviado por: {comment.creatorName}</p>
                            <p>{comment.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={likeImg} onClick={()=>like(comment.id)} />
                                 {comment.likes}
                                    <img src={dislikeImg} onClick={()=>dislike(comment.id)} /> 
                                </span> 
                            </p>
                        </article>
                        )})}
                    </div>
                </StyleSection>
            </MainModal>
        </>
    )


}
export default PostModal
