import { useState, useEffect } from 'react'
import { api } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import './style.css'

type PhotoOne = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


export function Photo(){
    const params = useParams()
    const navigate = useNavigate()

    const [photo, setPhoto] = useState<PhotoOne>()
    useEffect(() => {
        loadPhoto()
    }, [])

    const loadPhoto = async() => {
        let json = await api.getPhoto(params.slug)
        setPhoto(json)
    }
    const handleBack = () => navigate(-1)

    return(
        <>
        <h1>Galeria de fotos</h1>
        <button onClick={handleBack}>Voltar</button>
        <div>
            <p>{photo?.title}</p>
            <div style={{backgroundImage: `url(${photo?.url})`}} className='photo1'>
            </div>
        </div>
        </>
    )
}