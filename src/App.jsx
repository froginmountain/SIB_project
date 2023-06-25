import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import InfoClub from './pages/infoclub/InfoClub'
import VerifyClub from './pages/verifyclub/VerifyClub'
import Board from './pages/board/Board'
import Register from './pages/register/Register'
import Register2 from './pages/register2/Register'
import NotFound from './pages/notFound/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path='about' element={<About/>}/> */}
          <Route path='infoclub' element={<InfoClub />} />
          <Route path='verifyclub' element={<VerifyClub />} />
          {/* <Route path='board' element={<Board/>}/>
        <Route path='register' element={<Register/>}/> */}
          <Route path='*' element={<NotFound />} />
          <Route path='register' element={<Register />} />
          <Route path='register2' element={<Register2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App