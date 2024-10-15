import React from 'react'
// import radial from '../Assets/radial.svg'
import cell from '../Assets/Frame 446.png'
import '../CSS/(4)About.css'

const About = () => {
  return (
    <section className='about'>
      <div className='about-container'>
        <div className='about-image'>
          <img src={cell} alt='cell' />
        </div>
        <div className='about-text'>
          <h4>About Us</h4>
          <h2>Why Choose Us ?</h2>
          <p>
            At SCHMFOREX, your success is our priority. We offer comprehensive educational 
            resources and a level of client service that sets us apart. Our partnership with 
            a fully regulated broker licensed by the Financial Sector Conduct Authority (FSCA), 
            provides our clients with a secure and trusted trading platform. Our goal is to empower 
            traders with the skills and knowledge needed to navigate the financial markets confidently 
            and effectively.
          </p>

          <button id='start2'>Explore Now</button>

        </div>
      </div>
    </section>
  )
}

export default About