import React, { lazy, Suspense } from 'react'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import HomeFormSectionForModal from './HomeFormSectionForModal';

const HomeFormSectionForModal = lazy(() => import("./HomeFormSectionForModal"))

const TeacherTrainingSection = () => {
  const [Display1, setDisplay1] = useState(false);
  const [blog_id, setblog_id] = useState(false);

  // const navigate = usenavigate()
  const pushtoContact = (e, post_id) => {
    e.preventDefault()
    setblog_id(post_id)

    // navigate("/contact-us",{ state: { name:'Xyz' }})
    // navigate('/contact-us', { state: { enroll_id: post_id } })
    setDisplay1(true)
  }

  return (
    <section className='teachertraining_section'>

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
          <Suspense fallback={<h1>loading..</h1>}>
            <HomeFormSectionForModal blogData={{ blogid: blog_id ? blog_id : 0 }} />
          </Suspense>
        </Modal.Body>

      </Modal>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-5 p-0 image_col'>
            <img loading='lazy' src='assets/img/teacher_training_section_img.png' className='training_col_img' alt='cta' />
          </div>
          <div className='col-lg-7 p-0'>
            <div className='color_col'>
              <h2 className='headings2'>Pilates Teacher Training Program</h2>
              <p>An exciting opportunity is awaiting you. Join our Teacher’s
                Training Program and become a Pilates Instructor and have the potential
                to earn a higher income.</p>
              <br />
              <br />
              <Link onClick={pushtoContact} className="btn_color_col">Enroll Now</Link>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default TeacherTrainingSection