import React from 'react'
import '../CSS/(2)Hero.css'
import phone from '../Assets/Frame 445.png'
// import stocks from '../Assets/stocks.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-container'>
            <div className='hero-text'>
                <h1 className='hero-title'>live and <br/>on-demand training</h1>
                <p className='hero-subtitle'>
                    SCHMFOREX provides access to high-quality education,
                    personalized training, and dedicated customer support, 
                    ensuring that you have the tools needed to thrive in today’s ever-changing markets.
                </p>
                <button id='start'>Get started</button>
            </div>
            <div className='hero-img'>
                <div className='phone'>
                    <img src={phone} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero