import './App.css'
import { Gallery } from './pages/gallery'
import { Album } from './pages/album'
import { Photo } from './pages/photo'
import {Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Gallery/>}></Route>
      <Route path='/album/:slug' element={<Album/>}></Route>
      <Route path='/photo/:slug' element={<Photo/>}></Route>
    </Routes>
    </>
  )
}

export default App
