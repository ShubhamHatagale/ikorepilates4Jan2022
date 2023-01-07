import React from 'react'
import { Link } from 'react-router-dom'
import TeacherTrainingBlogsData from './TeacherTrainingBlogsData'
// import {FaRegCalendarAlt}  from "react-icons/fa";
// use props
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import HomeFormSection from './HomeFormSection';
import HomeFormSectionForModal from './HomeFormSectionForModal';

function BlogsBox(props) {
  const navigate = useNavigate();
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
    <div className="post_box">
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

      <Link href={props.post_img_link} className="post_img_link">
        {/* <ul className='post_ul'>
						        <li class="post-date"> <i><FaRegCalendarAlt/></i><strong>13 to 14 August</strong> <span> 2022</span> </li>
						        <li class="post-author">Available <a href="#">Offline</a> </li>
						    </ul>
                <div className="example__ribbon example__ribbon--tr"><span className="example__title">Demo</span></div> */}
        <img src={props.post_imgsrc} alt='movement' />
      </Link>
      <Link href={props.post_title_link}><h4 className='post_title'>{props.post_title}</h4></Link>
      <p>{props.post_description}</p> 
      <Link onClick={(e) => pushtoContact(e, props.post_btn_id)} className="btn-slider"> Enroll Now</Link>
    </div> 
  )
}
// end


const TeacherTrainingBlogs = () => {
  return (
    <section className='teacher_training_blogs pd1 pd2' id="certification">
      <div className="container">
        <div className="row">
          <h2 className='headings text-center pd4'>Pilates Teacher Training Program</h2>
          <p className='text-center'>Pilates Teacher Training Program is an internationally recognised Pilates certification
            program offering comprehensive MAT & APPARATUS training through academic course work and
            experiential learning. The foundation and advanced level of the MAT program can be attended
            virtually. However, the APPARATUS program is taught in an exclusive Pilates studio equipped
            with top of the line Balanced Body apparatus from the USA.</p>
        </div>

        <div className="row">
          {TeacherTrainingBlogsData.map((val) => {
            return (
              <div className="col-lg-4" key={val.id}>
                <BlogsBox
                  post_imgsrc={val.post_imgsrc}
                  post_img_link={val.post_img_link}
                  post_title={val.post_title}
                  post_title_link={val.post_title_link}
                  post_description={val.post_description}
                  post_btn_link={val.post_btn_link}
                  post_btn_id={val.id}
                />
              </div>

            );
          })}
        </div>

      </div>
    </section>
  )
}

export default TeacherTrainingBlogs