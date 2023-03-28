import { useState } from "react"

function GlobalState(){

    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [urlPost, setUrlPost] = useState('')
    const [modal, setModal] = useState(false)
    const [actionModal, setActionModal] = useState('')

    return{
        posts,
        setPosts,
        urlPost, 
        setUrlPost,
        modal, 
        setModal,
        actionModal, 
        setActionModal,
        comments,
        setComments
    }

}

export default GlobalState