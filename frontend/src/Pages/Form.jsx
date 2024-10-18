import React from 'react'
import '../CSS/Form.css'
import { BsEnvelope, BsPhone, BsGeoAlt } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";


const Form = () => {
  return (
    <>
    <section className='form'>
      <div className='form-block'>
        <div className='form-text'>
          <h2>Fill In Your Details And Recieve An Exclusive Guide  On ...</h2>
          <div className='contact-info'>
            <p><BsEnvelope />kms@mocaby.co.za</p>
            <p><BsPhone /> +27-64-801-6144</p>
            <p><BsGeoAlt /> 173 Oxford Road, Rosebank, Gauteng, 2196</p>

          <div>
            <div className='socials'>
              <FaFacebookF />
              <SiLinkedin />
              <BsTwitter/>
            </div>
              
        </div>
      </div>
      </div>
        <div className='form-group'>
          <div className='form-head'>
            <label for='nameInput' className='form-label'>First Name</label>
              <div className="input-wrapper">
                <input type="text" id="names" className="form-control" placeholder="Name" />
              </div> 

              <label for='nameInput' className='form-label'>Last Name:</label>
              <div className="input-wrapper">
                <input type="text" id="nameInput" className="form-control" placeholder="Surname" />
              </div> 

              <label for='nameInput' className='form-label'>Email</label>
              <div className="input-wrapper">
                <input type="text" id="nameInput" className="form-control" placeholder="example@gmail.com"/>
              </div>

              <label for='nameInput' className='form-label'>Phone</label>
              <div className="input-wrapper">
                <input type="number" id="nameInput" className="form-control" placeholder="+XX-XX-XXX-XXXX"/>
              </div>
              
              <textarea rows={6} type="text" placeholder="Description (optional)" />

              <button className='submit'>Submit</button>          
          </div>
        </div>


      </div>
    </section>
    </>
  )
}

export default Form