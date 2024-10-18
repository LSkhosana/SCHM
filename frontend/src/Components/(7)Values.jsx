import React from 'react'
import value from '../Assets/Frame 440.png'
import '../CSS/(7)Values.css'


const Values = () => {
  return (
    <section className='values'>
      <div className='values-container'>
        <div className='values-img'>
          <img src={value} alt='values' />
        </div>
        <div className='values-text'>
          <h4>Values</h4>
          <h2>Our Core Values</h2>
          <div className='para'>
            <h5>Equality:</h5>
            <p>
            We believe in providing equal access to education and trading resources 
            for individuals from all walks of life, across all experience levels. 
            </p>
          </div>

          <div className='para'>
            <h5>Transparency:</h5>
            <p>
            As a community-driven platform, we pride ourselves on honesty
            and integrity, ensuring that our clients receive clear, trustworthy services.             
            </p>
          </div>

          <div className='para'>
            <h5>Trust</h5>
            <p>
            We foster long-term relationships with both individuals and institutions, 
            creating a supportive community where members feel connected and valued.            
            </p>
          </div>
          <button id='start3'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Values