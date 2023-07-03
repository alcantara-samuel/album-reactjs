import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api'
import './style.css'

type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


export function Album(){
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }
    const params = useParams()


    const [photo, setPhotos] = useState<Photo[]>([]);

    useEffect(()=>{
        loadPhotos()
    }, [])

    const loadPhotos = async() =>{
        let json = await api.getAlbum(params.slug)
        setPhotos(json)
    }
    const verImage = (index: any) => {
        navigate(`/photo/${index}`)
    }


    


    return(
        <>
        <h1>Galeria de fotos</h1>
        <button onClick={handleBack}>Voltar</button>
        <div className='Container'>
            {photo.map((item, index) => (
                <div key={index} className='photo'>
                    <div style={{ backgroundImage: `url(${item.thumbnailUrl})`}} className='photoarea' onClick={() => verImage(item.id)}> 
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}