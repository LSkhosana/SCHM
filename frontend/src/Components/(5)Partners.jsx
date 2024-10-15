import React from 'react'
import globe from '../Assets/globe.png'
import '../CSS/(5)Partners.css'

const Partners = () => {
  return (
    <section className='partner'>
      <div className='partner-container'>
        <div className='partner-text'>
          <h4>Our Broker</h4>
          <h2>More About Our Broker</h2>
          <div className='paragraph'>
            <h5>Preferred Broker: ATFX</h5>
            <p>
              We've chosen ATFX as our preferred broker, a trusted and regulated broker 
              (FSP: 44816), licensed as an Over-the-Counter Derivative Provider (ODP) by 
              the FSCA, ensuring a secure and reliable trading environment.
            </p>
          </div>
          <div className='paragraph'>
            <h5>Trading Platforms</h5>
            <p>
              We support MetaTrader 5, providing industry-leading platforms 
              that cater to all your trading needs.
            </p>
            <button id='start2'>Learn More</button>

          </div>

        </div>
        <div className='partner-img'>
          <img src={globe} alt='globe'/>
        </div>
      </div>
    </section>
  )
}

export default Partners