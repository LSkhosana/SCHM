import React from 'react'
import '../CSS/(6)Features.css'
import candle from '../Assets/candles.png'
import market from '../Assets/market.png'
import sys from '../Assets/Mask group-1.png'
 
const Features = () => {
  return (
    <section className='features'>
      <div className='features-container'>
        <div className='features-head'>
          <h2>Additional Services</h2>
          <p>Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.</p>
        </div>
        <div className='feature-cards'>
          <div className='feature-card'>
            <p id='num'>01</p>
            <div className='items'>
              <img src={candle} alt=''/>
              <h3>Daily Trading Rooms</h3>
              <p>Join our live trading rooms, focused on key fundamental events, to stay ahead of market trends.</p>
            </div>
          </div>
          <div className='feature-card'>
          <p id='num'>02</p>
            <div className='items'>
              <img src={market} alt=''/>
              <h3>Market Analysis & Insights</h3>
              <p>Access high-quality market analysis to enhance your understanding and improve decision-making.</p>
            </div>
          </div>
          <div className='feature-card'>
          <p id='num'>03</p>
            <div className='items'>
              <img src={sys} alt=''/>
              <h3>Tailored Trading Systems</h3>
              <p>Work with our mentors to create personalized trading strategies that align with your financial goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features