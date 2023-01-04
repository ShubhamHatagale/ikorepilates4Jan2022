import React from 'react';
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


const ContactDetails = () => {
  return (
    <div className='contact_details pd5'>
        <div className="container">
            <div className="row">
            
                <div className="col-lg-4">
                    <div className="contact_details_box">
                        <div className="contact_icon">
                         <FaHeadphonesAlt/>
                        </div>
                        <div className="deatis">
                            <h4>Phone Number</h4>
                            <p><a href="tel:+91 9700448833">+91 9700448833</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="contact_details_box">
                        <div className="contact_icon">
                        <FaEnvelope/>
                        </div>
                        <div className="deatis">
                            <h4>Email Address</h4>
                            <p><a href="mailto:info@ikorepilates.com">info@ikorepilates.com</a></p>                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-4">
                <div className="contact_details_box">
                        <div className="contact_icon">
                          <FaMapMarkerAlt/>
                        </div>
                        <div className="deatis">
                            <h4>Location</h4>
                            <p>1st Floor, 253/1/1, Trinity Building, Baner Park, Near Aundh
                             Telephone Exchange, Aundh, Pune -7</p>                        
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails