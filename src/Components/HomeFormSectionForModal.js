import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaUserCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import TeacherTrainingBlogsData from './TeacherTrainingBlogsData'
import { useForm } from 'react-hook-form';
// import { ReCAPTCHA } from 'react-google-recaptcha';
import ReCAPTCHA from "react-google-recaptcha";


const HomeFormSection = (props) => {
  console.log(Object.keys(props).length)
  const blogId = Object.keys(props).length > 0 ? props.blogData.blogid : 0;

  // console.log(blogId)
  // latest
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });
  const [verfied, setVerifed] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }

  const [display, setdisplay] = useState(false);
  const API_URL = process.env.REACT_APP_Base_URL;


  const onSubmit = (data) => {
    console.log(data);
    // setFormErrors(validate(formValues));
    console.log(API_URL)
    // return false

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    // myHeaders.append("Authorization", `Basic WXUxOXQxbkUwVGpNd254eUQ5Og==`);


    fetch(`${API_URL}/enroll/course`,
      {
        method: 'POST',
        headers: myHeaders,

        body: JSON.stringify(data)
      }).then((data) => { return data.json() }).then((result) => {
        console.log(result)
        setdisplay(true)
        reset();

        setTimeout(() => {
          setdisplay(false)
        }, 5000);
        
      }).catch((error) => console.log(error));
  }

  return (
    <section className='form_section pd3 pd6'>
      <div className="container">

        <div className="row">
          <h2 className='headings text-center pd4'>Let’s get going, Shall we?</h2>


          <div className="col-lg-12">

            {/* {display?(<div style={{ textAlign: "center" }}>
              <p style={{ padding: "5px", width: "30%", position: "relative", left: "36%", color: "white", boxShadow: "1px 1px gray", borderRadius: "4px", background: "#ed8c13", height: "41px" }}>Thank you for contacting us</p>
            </div>):null} */}

            {display ? (<div className='row' style={{ textAlign: "center" }}>
              <div className='col-lg-4'></div>
              <div className='col-lg-4'>
                <p style={{ background: "#ed8c13", color: "white", boxShadow: "1px 1px gray", borderRadius: "4px" }}>
                  Thank you for getting in touch! <br></br>
                  One of our colleagues will get back in touch with you soon! Have a great day!
                </p>
              </div>
              <div className='col-lg-4'></div>

            </div>) : null}

            <Form className='home_form' onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-2 home_from_row">

                <Form.Group className='col-md-6' controlId="formGridName">
                  <Form.Label className='modal_label'>Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('name', { required: true, pattern: [/[a-z]/, /[A-Z]/, /[0-9]/] })}
                    name="name"
                    placeholder="Enter Name"
                  />
                  <FaUserCircle className='form_icon_modal' />
                  {errors.name && <p className='form_error_message modal_error_msg'>Please Enter Name</p>}
                </Form.Group>

                <Form.Group className='col-md-6' controlId="formGridEmail">
                  <Form.Label className='modal_label'>Email</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i })}
                    name="email"
                    placeholder="Enter email"
                  />
                  <FaEnvelope className='form_icon_modal' />
                  {errors.email && <p className='form_error_message modal_error_msg'>Please Check Email</p>}
                </Form.Group>

              </Row>

              <Row className="mb-2 home_from_row">
                <Form.Group className='col-md-6' controlId="formGridPhone">
                  <Form.Label className='modal_label'>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    {...register('phone', { required: true, maxLength: 10, minLength: 10, })}
                    name="phone"
                    placeholder="Enter Phone Number" />
                  <FaPhoneAlt className='form_icon_modal' />
                  {errors.phone && <p className='form_error_message modal_error_msg'>Please Enter 10 Digit Phone Number</p>}
                </Form.Group>

                <Form.Group className='col-md-6' controlId="formGridState">
                  <Form.Label className='modal_label'>Course</Form.Label>
                  <Form.Select
                    name="course"
                    {...register('course', { required: true })}

                  >
                    <option value=""></option>
                    {TeacherTrainingBlogsData.map((item, id) => {
                      return (
                        <option selected={item.id === blogId ? true : false} value={item.post_title}>{item.post_title}</option>
                      )
                    })}
                  </Form.Select>
                  <FaListAlt className='form_icon_modal' />
                  {errors.course && <p className='form_error_message modal_error_msg'>Please Select Course </p>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label className='modal_label'>Message</Form.Label>
                  <Form.Control
                    as="textarea" rows={3}
                    {...register('message', { required: true, pattern: [/[a-z]/, /[A-Z]/, /[0-9]/] })}
                    name="message"
                  />
                  {errors.message && <p className='form_error_message modal_error_msg' >Please Enter Message </p>}
                </Form.Group>
              </Row>

              {/* <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={onChange}
              /> */}

              <Button className='form_btn' type="submit"
                // disabled={!verfied}
              >
                Submit
              </Button>

            </Form>


          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFormSection