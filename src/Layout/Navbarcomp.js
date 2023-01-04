import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap';
import Headermenu from './Headermenu';
// import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import {Navbar,Nav,NavDropdown}

const Navbarcomp = () => {
  return (
    <div className='header_sec'>
   <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="assets/img/ikore-pilates-logo.png" className="logo_img" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Headermenu/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarcomp;