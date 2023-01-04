import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaUserCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { json } from 'react-router-dom';

import {useForm} from 'react-hook-form';


const HomeFormSection = () => {
// latest
const {register,handleSubmit,formState:{errors}}=useForm({mode:"onChange"});


  // 3
  const initialValues = { name: "", email: "", phone: "", course: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const API_URL = process.env.REACT_APP_Base_URL;

  const course_options = [
    { id: 1, option: "Movement Principle" },
    { id: 2, option: "Mat 1(Basic)" },
    { id: 3, option: "Mat 2(Intermediate)" },
    { id: 4, option: "Mat 3" },
    { id: 5, option: "Reformer 1(Basic)" },
    { id: 6, option: "Reformer 2(Intermediate)" },
    { id: 7, option: "Reformer 3" },
    { id: 8, option: "Trapeze Table" },
    { id: 9, option: "Chair" }
  ]
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   console.log(API_URL)
  //   // return false

  //   var myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json')
  //   myHeaders.append("Authorization", `Basic WXUxOXQxbkUwVGpNd254eUQ5Og==`);

  //   fetch(`${API_URL}/enroll/course`,
  //     {
  //       method: 'POST',
  //       headers: myHeaders,

  //       // headers: {
  //       //   'Accept': 'application/json',
  //       //   'Content-Type': 'application/json',
  //       //   'Authorization': "Basic WXUxOXQxbkUwVGpNd254eUQ5Og==' \"
  //       // },
  //       body: JSON.stringify(formValues)
  //     }).then((data) => { return data.json() }).then((result) => {
  //       console.log(result)
  //       setIsSubmit(true);

  //       setTimeout(() => {
  //         setIsSubmit(false);
  //       }, 5000);
  //       // if (isSubmit)
  //       alert("data is submited");
  //     }).catch((error) => console.log(error));


  // };

  // useEffect(() => {
  //   console.log(formErrors);
   
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.name) {
  //     errors.name = "Name is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.phone) {
  //     errors.phone = "Phone number is required";
  //   } else if (values.phone.length < 10) {
  //     errors.phone = "Phone number must be 10  characters";
  //   } else if (values.phone.length > 10) {
  //     errors.phone = "Phone cannot exceed more than 10 digits";
  //   }
  //   if (!values.course) {
  //     errors.course = "Please Select Course!";
  //   }
  //   if (!values.message) {
  //     errors.message = "Message can't be empty!";
  //   }
  //   return errors;
  // };

  //end


  const onSubmit = (data)=>{
    console.log(data);
    // setFormErrors(validate(formValues));
    console.log(API_URL)
    // return false
  
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append("Authorization", `Basic WXUxOXQxbkUwVGpNd254eUQ5Og==`);
  
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
        setIsSubmit(true);
  
        setTimeout(() => {
          setIsSubmit(false);
        }, 5000);
        // if (isSubmit)
        alert("data is submited");
      }).catch((error) => console.log(error));
  }

  return (
    <section className='form_section pd3 pd6'>
      <div className="container">
        <div className="row">
          <h2 className='headings text-center pd4'>Let’s get going, Shall we?</h2>
          
          <div className="col-lg-12">
           
            <Form className='home_form' onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-2 home_from_row">
                <Form.Group className='col-md-6' controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('name',{required:true,pattern:/^[A-Za-z]+$/i})}
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
                    {...register('email',{required:true,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i})}
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
                    {...register('phone',{required:true,maxLength:10,minLength:10,})}
                    name="phone" 
                    placeholder="Enter Phone Number" />
                  <FaPhoneAlt className='form_icon' />
                  {errors.phone && <p className='form_error_message'>Please Check Phone Number</p>}
                </Form.Group>

                <Form.Group className='col-md-6' controlId="formGridState">
                  <Form.Label>Course</Form.Label>
                  <Form.Select name="course" {...register('course',{required:true})} >
                   <option value=""></option>
                   {course_options.map((item, id) => {
                      return (
                        <option value={item.option}>{item.option}</option>
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
                    {...register('message',{required:true})}
                    onChange={handleChange}
                    name="message" />
                  {errors.message && <p className='form_error_message'>Please Enter Message</p>}
                </Form.Group>
              </Row>
              <Button className='form_btn' type="submit" >
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