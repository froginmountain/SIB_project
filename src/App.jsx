import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import InfoClub from './pages/infoclub/InfoClub'
import VerifyClub from './pages/verifyclub/VerifyClub'
import Board from './pages/board/Board'
import Register from './pages/register/Register'
import NotFound from './pages/notFound/NotFound'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Home/>
      <About/>
      <InfoClub/>
      <VerifyClub/>
      <Board/>
      <Register/>
      <NotFound/>
    </BrowserRouter>
  )
}

export default App