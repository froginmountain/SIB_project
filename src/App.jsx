import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import InfoClub from './pages/infoclub/InfoClub'
import VerifyClub from './pages/verifyclub/VerifyClub'
import Board from './pages/board/Board'
import Register from './pages/register/Register'
import NotFound from './pages/notFound/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<Home/>}/>
        {/* <Route path='about' element={<About/>}/> */}
        <Route path='infoclub' element={<InfoClub/>}/>
        <Route path='verifyclub' element={<VerifyClub/>}/>
        {/* <Route path='board' element={<Board/>}/>
        <Route path='register' element={<Register/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App