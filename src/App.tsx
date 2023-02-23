import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  )
}

export default App