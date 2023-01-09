import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  
  return (
    <section className='footer_section pd2'>
      <div className="container text-center p-3">
        <div className="ft_social_links text-center">
          <a href="https://www.facebook.com/iKOREPILATES/" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
          <a href="https://www.instagram.com/ikore_pilates/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer noopener"><FaInstagramSquare /></a>
          <a href="https://www.linkedin.com/company/be-fit-pilates/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
        </div>


        <div className=" mt-5 text-dark text-center row" >
          <div style={{ fontWeight: "500px", cursor: "pointer", fontSize: "20px", color: "black" }}>
            {/* style={{ flex: "0 0 auto", width: "40%" }} */}
            <Link to="/terms_policy" >Cancellation and Other Policy </Link>

            {/* <Link onClick={()=>window.location.replace("https://www.befitpilates.in/cancellation-and-other-policy")} >Terms </Link> */}
            {/* style={{ flex: "0 0 auto", width: "8.5%", fontWeight: "500px", cursor: "pointer", fontSize: "20px", color: "black" }}  */}
            {/* <div   >|</div> */}
            {/* <span style={{padding:"0px 5px 0px 5px"}}>|</span> */}
            {/* style={{ flex: "0 0 auto", width: "2%", fontWeight: "500px", cursor: "pointer", fontSize: "20px", color: "black" }} */}
            {/* <Link onClick={()=>window.location.replace("https://www.befitpilates.in/cancellation-and-other-policy")} > Privacy Policy</Link> */}
            {/* style={{ flex: "0 0 auto", width: "12%", fontWeight: "500px", cursor: "pointer", fontSize: "20px", color: "black" }} */}
          </div>
          {/* style={{ flex: "0 0 auto", width: "40%" }} */}

        </div>
      </div>
    </section>

  )
}

export default Footer;