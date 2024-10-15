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
                <div className="box" id='box1'>

                </div>
                <div className="box" id='box2'>
                  <div className='i'>
                    <img src={chart} alt=''/>
                  </div>
                  <h4>Comprehensive Training</h4>
                  <p>
                    Learn at your own pace with access to a variety 
                    of group and individual learning sessions
                    tailored to your level.
                  </p>
                </div>
                <div className="box" id='box3'>
                  <div className='i'>
                    <img src={stock} alt=''/>
                  </div>                  
                  <h4>Live Trading Sessions</h4>
                  <p>
                    Participate in regular live webinars led by seasoned mentors, 
                    covering key market topics and providing practical,
                    real-time insights.
                  </p>
                </div>
                <div className="box" id='box4'>
                  <div className='i'>
                    <img src={group} alt=''/>
                  </div>                  
                  <h4>Flexible Learning</h4>
                  <p>
                  Choose between group sessions for collaborative learning or 
                  personalized 1-on-1 mentorship for more focused attention.
                  </p>

                </div>
                <div className="box" id='box5'>
                  <div className='i'>
                    <img src={headphones} alt=''/>
                  </div>
                  <h4>Ongoing Support</h4>
                  <p>
                  Receive daily support from dedicated account managers and mentors, 
                  keeping you informed with the latest market developments and strategies. 
                  </p>

                </div>
                <div className="box" id='box6'>
                  <div className='i'>
                    <img src={network} alt=''/>
                  </div>
                  <h4>Community Engagement</h4>
                  <p>
                  Connect with other traders in our community, sharing experiences 
                  and gaining valuable insights.
                  </p>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Services