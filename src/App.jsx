import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Buttonback from './components/Buttonback'


function App() {
    return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Clients />
        <Contact />
        <Footer />
        <Buttonback />
    </>
  )
}

export default App