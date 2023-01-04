import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from 'react';


const FlashMessage = () => {

  const [DisableStatus, setDisableStatus] = useState(localStorage)



  const handleClose = () => {
    setDisableStatus(false)
    localStorage.setItem("flash", true)
  }

  return (
    <>
      {DisableStatus.length == 0 ? (
        <section className='FlashMessage_section pd2 text-center' style={{ background: "#EB8A13", height: "100px", color: "white" }}>
          <div style={{ color: "white", border: "1px solid black", width: "50px", height: "40px", position: "relative", left: "97%" }}>
            <button type="button" onClick={handleClose} className="btn-close btn-close-white " aria-label="Close"></button>
          </div>

          <div className="container text-center  " style={{ position: "absolute", top: "10px",left:"16%", height: "20%", width: "100%", color: "white", overflow: "hidden",textAlign:"center" }}>

            <div style={{ textAlign: "center", padding: "20px", justifyContent: "center" }} >
              <h3 style={{ color: "#fffff" }}>Rs. 4500 Introduction to Pilates
                Get onto your Pilates Journey Now !  <Link to='/contact-us' className='headMsgLink'>Click Here</Link></h3>
            </div>
          </div>
        </section>

      ) : null}


    </>

  )
}

export default FlashMessage;