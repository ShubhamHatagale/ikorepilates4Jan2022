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
import ReCAPTCHA from "react-google-recaptcha";


const HomeFormSection = (props) => {
  const [verfied, setVerifed] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });


  const [display, setdisplay] = useState(false);

  const API_URL = process.env.REACT_APP_Base_URL;



  const onSubmit = (data) => {
    console.log(data);
    // setFormErrors(validate(formValues));
    console.log(API_URL)
    // return false

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    // myHeaders.append("Authorization");
    // myHeaders.append("Authorization", `Basic WXUxOXQxbkUwVGpNd254eUQ5Og==`);


    fetch(`${API_URL}/enroll/course`,
      {
        method: 'POST',
        headers: myHeaders,
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Authorization': "Basic WXUxOXQxbkUwVGpNd254eUQ5Og==' \"
        // },
        body: JSON.stringify(data)
      }).then((data) => { return data.json() }).then((result) => {
        console.log(result)
        // setIsSubmit(true);
        setdisplay(true)
        reset();

        setTimeout(() => {
          // setIsSubmit(false);
          setdisplay(false)
          // data=[]
          // for (const prop of Object.getOwnPropertyNames(data)) {
          //   delete data[prop];
          // }

          console.log(data)
        }, 5000);
        // if (isSubmit)
        // alert("data is submited");
      }).catch((error) => console.log(error));
  }


  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }



  return (
    <>
      {/* <div className="d-flex flex-column align-items-center justify-content-center h-100 mt-4">
        <h1 className="mb-3">Re Captach Tutorial</h1>
        <form>
          <div className="mb-3" style={{ width: 500 }}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />

          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={!verfied}
          >
            Submit
          </button>
        </form>
      </div> */}

      <section className='form_section pd3 pd6'>
        <div className="container">

          <div className="row">
            <h2 className='headings text-center pd4'>Let’s get going, Shall we?</h2>


            <div className="col-lg-12">

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
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register('name', { required: true, pattern: [/[a-z]/, /[A-Z]/, /[0-9]/] })}
                      name="name"
                      placeholder="Enter Name"
                    />
                    <FaUserCircle className='form_icon' />
                    {errors.name && <p className='form_error_message'>Please Enter Name</p>}
                  </Form.Group>

                  <Form.Group className='col-md-6' controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i })}
                      name="email"
                      placeholder="Enter email"
                    />
                    <FaEnvelope className='form_icon' />
                    {errors.email && <p className='form_error_message'>Please Check Email</p>}
                  </Form.Group>

                </Row>

                <Row className="mb-2 home_from_row">
                  <Form.Group className='col-md-6' controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      {...register('phone', { required: true, maxLength: 10, minLength: 10, })}
                      name="phone"
                      placeholder="Enter Phone Number" />
                    <FaPhoneAlt className='form_icon' />
                    {errors.phone && <p className='form_error_message'>Please Enter 10 Digit Phone Number</p>}
                  </Form.Group>

                  <Form.Group className='col-md-6' controlId="formGridState">
                    <Form.Label>Course</Form.Label>
                    <Form.Select
                      name="course"
                      {...register('course', { required: true })}

                    >
                      <option value=""></option>
                      {TeacherTrainingBlogsData.map((item, id) => {
                        return (
                          <option
                            // selected={item.id == blogId ? true : false}
                            value={item.post_title}>{item.post_title}</option>
                        )
                      })}
                    </Form.Select>
                    <FaListAlt className='form_icon' />
                    {errors.course && <p className='form_error_message'>Please Select Course </p>}
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea" rows={3}
                      {...register('message', { required: true, pattern: [/[a-z]/, /[A-Z]/, /[0-9]/] })}
                      name="message"
                    />
                    {errors.message && <p className='form_error_message'>Please Enter Message</p>}
                  </Form.Group>
                </Row>

                {/* <ReCAPTCHA
                  sitekey={`6LdGsvQjAAAAALDJWI7bQsgmDXEpd9zmohPqUkWc`}
                  onChange={onChange}
                /> */}

                {/* <Button className='form_btn mt-3' type="submit" disabled={!verfied}>
                  Submit
                </Button> */}
                <Button className='form_btn mt-3' type="submit" >
                  Submit
                </Button>
              </Form>


            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default HomeFormSection