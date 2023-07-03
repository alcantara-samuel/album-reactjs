import { useState, useEffect } from "react"
import { api } from "../../api";
import { useNavigate } from 'react-router-dom'
import './style.css'

type Post = {
    userId: number;
    id: number;
    title: string;
  }


export function Gallery(){
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(()=>{
        loadPosts()
    }, []) 

    const loadPosts = async () => {
        let json = await api.getAllPosts();
        setPosts(json);
    }

    const navigate = useNavigate()
    const abrirAlbum = (index: number) => {
        navigate(`/album/${index}`)
    }
    return (
        <>
        <h1>Galeria de fotos</h1>
        <div className="container">
            {posts.map((item, index) => (
                <div key={index} className="Album" onClick={() => abrirAlbum(index+1)}>
                    <h4>{item.title}</h4>
                </div>
            ))}
        </div>
        </>
    )
}