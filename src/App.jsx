import React from 'react'
import Navbar from './compnanets/Navbar'
import Main from './pages/Main'
import Population from './pages/Population'
import Ekskursiya from './pages/Ekskursiya'
import Otziv from './pages/Otziv'
import Subscribe from './pages/Subscribe'
import Footer from './compnanets/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Population/>
      <Ekskursiya/>
      <Otziv/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
