import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../CSS/(9)Footer.css'


const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className='footer-text'>
          <p>© 2024 SCHM Forex. All rights reserved. Designed by AI Global Netwoks</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} id='i1' className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn}  className="social-icon" id='i2' />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" id="i3">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" id='i4' />
          </a>
      </div>

      </div>
    </section>
  )
}

export default Footer