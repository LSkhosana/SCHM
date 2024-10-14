import React from 'react'
import '../CSS/(3)Services.css'
import chart from '../Assets/chart.png'
import group from '../Assets/Group.png'
import headphones from '../Assets/headphones.png'
import network from '../Assets/network .png'
import stock from '../Assets/stock.png'


const Services = () => {
  return (
    <section className='service'>
        <div className="service-container">
            <div className='service-title'>
                <h4>Services</h4>
                <h2>Trade bigger and get paid faster.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipis elit</p>
            </div>
            <div className="service-grid">
                <div className="box">

                </div>
                <div className="box">
                <img src={chart} alt=''/>

                </div>
                <div className="box">
                <img src={stock} alt=''/>

                </div>
                <div className="box">
                <img src={group} alt=''/>

                </div>
                <div className="box">
                <img src={headphones} alt=''/>

                </div>
                <div className="box">
                <img src={network} alt=''/>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Services