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
    <section className='footer_section pd1 pd2'>
       <div className="container">
           <div className="row">
             <div className="col-lg-3">
                 <h3>Gallery</h3>
                 <ul className='ft_gal_ul'>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal1'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal2'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal3'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal4'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal5'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal6'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal7'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal8'/></Link></li>
                 <li className='ft_gal_li'><Link to="#"><img loading='lazy' src='assets/img/ft_gal_img4.webp' alt='gal9'/></Link></li>
                 </ul>
             </div>
             <div className="col-lg-3">
             <h3>Useful Links</h3>
               <ul className='useful_link'>
                <li><Link to='/cancellation-and-other-policy'>Cancellation and Other Policy</Link></li>
               </ul>
               

             </div>
             <div className="col-lg-3">
                <h3>Contact Us</h3>
                <ul className='ft_icon_ul'>
                    <li><FaLocationArrow/><strong>Address</strong><br/><p>iKORE Pilates (Formerly BeFit Pilates) 
                    1st Floor, 253/1/1, Trinity Building, Baner Park, Near Aundh Telephone Exchange, Aundh, Pune</p></li>
                    <li><FaPhoneAlt/><strong>Phone</strong><br/>
                    <a href="tel:09700448833">+91 9700448833</a></li>
                    <li><FaEnvelope/><strong>Email</strong><br/>
                    <a href="mailto:info@ikorepilates.com">info@ikorepilates.com</a></li>
				        </ul>
                <div className="ft_social_links">
                   <a href="https://www.facebook.com/iKOREPILATES/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                   <a href="https://www.instagram.com/ikore_pilates/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer noopener"><FaInstagramSquare/></a>
                   <a href="https://www.linkedin.com/company/be-fit-pilates/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
                </div>
             </div>
             <div className="col-lg-3">
                <h3>Find Us</h3>
                  <div className="map_sec">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7564.673048568565!2d73.80319200000001!3d18.558861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4dad5b80d5e9cd2!2siKore%20Pilates%20(Earlier%20BeFit%20Pilates)%20%7C%20Best%20Pilates%20Studio%20in%20Pune!5e0!3m2!1sen!2sin!4v1669724545842!5m2!1sen!2sin" 
                    width="100%"
                    height="300px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                  </iframe>
                  </div>
             </div>
           </div>
       </div>
    </section>
   
  )
}

export default Footer;