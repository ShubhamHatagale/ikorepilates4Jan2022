import React from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import HomeFormSectionForModal from './HomeFormSectionForModal';

const Slidersection = () => {
  const [Display1, setDisplay1] = useState(false);
  const [blog_id, setblog_id] = useState(false);

  // const navigate = usenavigate()
  const pushtoContact = (e, post_id) => {
    e.preventDefault()
    console.log(post_id)
    setblog_id(post_id)

    // navigate("/contact-us",{ state: { name:'Xyz' }})
    // navigate('/contact-us', { state: { enroll_id: post_id } })
    setDisplay1(true)
  }
  return (
    //  <!-- ======= Hero Section ======= -->
  <section id="hero" className="d-flex align-items-center">
     <Modal
        size="lg"
        show={Display1}
        onHide={() => setDisplay1(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="modal-dialog-scrollable"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Contact Form</Modal.Title> */}
        </Modal.Header>

        <Modal.Body className="success text-center " > 
          {/* <HomeFormSection blogData={{ blogid: locationData.state ? locationData.state.enroll_id : 0 }} /> */}
          <HomeFormSectionForModal blogData={{ blogid: blog_id ? blog_id : 0 }} />
        </Modal.Body>

      </Modal>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>INTERNATIONAL PILATES <br></br><span className='dual-text'>CERTIFICATION</span></h1>
          <p><strong>The most sought after Pilates certification, iKore Pilates</strong>  is the most trusted Pilates instructor training and Balanced Body,USA Authorised Training Centre
          founded by Dr. Deepali Gupta (Pilates Ambassador India), who has a proven
          track-record of training and mentoring over 150+ Pilates instructors globally.
          </p>
          <div className="d-flex">
            <Link href="https://www.youtube.com/watch?v=16txccVZSew" className="btn-slider">Play Video</Link>
            <Link onClick={pushtoContact} className="btn-slider"> Enroll Now</Link> 
          </div>
        </div> 
        <div className="col-lg-6">
          {/* <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/> */}
        </div>
      </div>
    </div>
</section>

  )
}

export default Slidersection


