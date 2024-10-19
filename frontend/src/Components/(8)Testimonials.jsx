import React from 'react'
import '../CSS/(8)Testimonials.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const sliderCards = [1, 2, 3, 4, 5]; // Array with 5 elements
const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='testimonial-container'>
        <div className='testimonial-head'>
        <h2><span style={{color: 'rgba(0, 174, 255, 1)'}}>&ldquo;</span>Testimonials<span style={{color: 'rgba(0, 174, 255, 1)'}}>&rdquo;</span></h2>
          <div className='testimonial-text'>
            <div className='p1'>
              <p>Hear from Our Satisfied Clients: Real Stories of Success, Growth, and Confidence in Our Proven Trading Strategies</p>
            </div>
            <div className='slide'>
              <div className='slide1'><FaArrowLeft /></div>
              <div className='slide1'><FaArrowRight /></div>
            </div>
          </div>
        </div>
        <div className='slider'>
      <div className='slider-cards'>
        {sliderCards.map((card, index) => (
          <div className='slide-card' key={index}>
            {/* Card content can go here */}
            Card {card}
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  )
}

export default Testimonials