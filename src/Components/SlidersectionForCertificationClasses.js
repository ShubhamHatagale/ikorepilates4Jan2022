import React, { Suspense, lazy } from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import HomeFormSectionForModal from './HomeFormSectionForModal';
const HomeFormSectionForModal = lazy(() => import("./HomeFormSectionForModal"))

const Slidersection = () => {
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
    <section id="hero_classes" className="d-flex align-items-center">
      {/* <div id="hero_classes" className="d-flex align-items-center"></div> */}
      {/* <div className='col-lg-8 p-0'>
        <div className='color_class_col'>
          <h2 className='headings2'>MAT CLASSES</h2>
          <p>Pilates Mat is done on the floor on a mat. It may include Pilates props like the balls,
            foam rollers, pilates magic circles and other fitness tools. Batch strength of the class is
            limited to a maximum of 12 students per batch so that detailed attention can be given to all.
            Class Level – Expert. Beginner, Intermediate Age Limit – Kids, Adults, Teens.</p>

        </div>
      </div>
      <div className='col-lg-4 p-0 image_col'>
        <img loading='lazy' src='assets/img/class_mat.webp' className='class_right_img' alt='cta' />
      </div> */}

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

      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 ">
            <h1>Excellent Pilates Classes <br></br>
            <span className='dual-text'>Guided by Experts</span></h1>
            <p>
              {/* <strong>Achieve poise, fitness and balance –</strong> */}
              If you are looking for an excellent Pilates class, guided by experts,
              then you have come to the right place. Our experienced instructors will
              help you get the most out of your Pilates sessions. With our classes,you
              can improve your posture, build strength and flexibility, and reduce stress
              levels. We offer a variety of classes for all levels – from beginner
              to advanced – so everyone can benefit from our Pilates classes!
            </p>
            <div className="d-flex">
              <a href="https://www.youtube.com/watch?v=16txccVZSew" className="btn-slider">Play Video</a>
              <Link onClick={pushtoContact} className="btn-slider"> Enroll Now</Link>
            </div>
          </div>


          <div className='col-lg-6'>
            <img loading='lazy' src='assets/img/class_banner.webp' className='class_right_img_class' alt='cta' />
          </div>


        </div>
      </div>
    </section>

  )
}

export default Slidersection


