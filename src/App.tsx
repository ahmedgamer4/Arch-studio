import React from 'react'
import Header from './components/layout/Header'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'

function App() {
  return (
    <div className='min-h-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App