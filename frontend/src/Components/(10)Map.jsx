import React from "react";
import '../CSS/(10)Map.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Map = () => {

    return (
        <section className="map">
            <div className="map-title">
                <h4>Our Location</h4>
                <h2>Where to find us</h2>
            </div>
            <div className="map-container">
                <div className="map-content">
                    <div style={{ width: '100%' }}>
                        <iframe 
                            width="696" 
                            height="491" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0" 
                            src="https://maps.google.com/maps?width=696&amp;height=491&amp;hl=en&amp;q=114%20Dennis%20Road,%20Atholl,%20Sandton,%202196+(Schm%20Forex)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                    </div>
                    <div className="map-info">
                        <p>
                            <FontAwesomeIcon 
                                icon={faMapMarkerAlt} 
                                className="icon-b" 
                            />
                            114 Dennis Road, Atholl, Sandton, 2196
                        </p>
                        <p>
                            <FontAwesomeIcon 
                                icon={faPhoneAlt} 
                                className="icon-b" 
                            />
                            068 017 5758
                        </p>
                        <p>
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                className="icon-b" 
                            />
                            schmefore@gmail.com
                        </p>
                    </div>
                
            </div>
        </section>
    );
    
};

export default Map;
