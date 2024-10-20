import React from 'react'
import NavBar from '../Components/(1)NavBar'
import Hero from '../Components/(2)Hero'
import Services from '../Components/(3)Services'
import About from '../Components/(4)About'
import Partners from '../Components/(5)Partners'
import Features from '../Components/(6)Features'
import Values from '../Components/(7)Values'
import Testimonials from '../Components/(8)Testimonials'
import Footer from '../Components/(9)Footer'
import Map from '../Components/(10)Map'
import './Zpages.css'

const Home = () => {
  return (
    <div className='home-page'>
      <div className='grad'></div>
        <NavBar/>
        <Hero/>
        <Services/>
        <About/>
        <Partners/>
        <Features/>
        <Values/>
        <Testimonials/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default Home