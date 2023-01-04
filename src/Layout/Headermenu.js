import React from 'react'
// import { NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import "../App.css";

const Headermenu = () => {
  return (
    <div className='top_menu'>
      <ul className='navbar_list'>
        <li><NavHashLink activeclassname="active_class" to='/#'>Home</NavHashLink></li>
        <li>
          {/* <NavLink activeclassname="active_class" to='/about'> */}
          <div class="dropdown">
            <NavLink activeclassname="active_class" to='/about' class="dropbtn">About Us</NavLink>
            <div class="dropdown-content">
              <NavHashLink activeclassname="active_class" to='/why_choose_us'>Why Us</NavHashLink>
              <NavHashLink activeclassname="active_class" to='/our_team'>Our Team</NavHashLink>

            </div>
          </div>
          {/* </NavLink> */}
        </li>
        <li><NavLink activeclassname="active_class" to='/classes'>Classes</NavLink></li>
        <li><NavHashLink activeclassname="active_class" to='/certification'>Certification</NavHashLink></li>
        <li><NavLink activeclassname="active_class" to='/testimonials'>Testimonials</NavLink></li>
        {/* <li><NavLink  activeclassname="active_class" to='/cancellation-and-other-policy'>Cancellation</NavLink></li> */}
        <li><NavLink activeclassname="active_class" to='/contact-us'>Contact</NavLink></li>
        <li><BsSearch /></li>
      </ul>
    </div>
  )
}

export default Headermenu