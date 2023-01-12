import React, { Suspense, lazy } from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import WhyChoose from '../Pages/WhyChooseUs';
// import HomeFormSectionForModal from './HomeFormSectionForModal';
const HomeFormSectionForModal = lazy(() => import("./HomeFormSectionForModal"))

const WhyChooseUsBreadCum = () => {
  const [Display1, setDisplay1] = useState(false);
  const [blog_id, setblog_id] = useState(false);

  // const navigate = usenavigate()
  const pushtoContact = (e, post_id) => {
    e.preventDefault()
    // console.log(post_id)
    setblog_id(post_id)

    // navigate("/contact-us",{ state: { name:'Xyz' }})
    // navigate('/contact-us', { state: { enroll_id: post_id } })
    setDisplay1(true)
  }
  return (
    //  <!-- ======= Hero Section ======= -->
    <section id="hero_about" className="d-flex col-lg-12 align-items-center">
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
          <Suspense fallback={<h1>loading..</h1>}>
            <HomeFormSectionForModal blogData={{ blogid: blog_id ? blog_id : 0 }} />
          </Suspense>
        </Modal.Body>

      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>INTERNATIONAL PILATES <br></br><span className='dual-text'>Why Choose Us</span></h1>
            <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting  </strong>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="d-flex">
              <a href="https://www.youtube.com/watch?v=16txccVZSew" className="btn-slider">Play Video</a>
              <Link onClick={pushtoContact} className="btn-slider"> Enroll Now</Link>
            </div>
          </div>

        </div>
      </div>
      {/* <WhyChoose /> */}
    </section>

  )
}

export default WhyChooseUsBreadCum


