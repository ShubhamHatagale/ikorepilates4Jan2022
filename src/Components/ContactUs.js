import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";



const ContactUs = () => {

  // 3
  const initialValues = { name: "", email: "", phone: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone number must be 10  characters";
    } else if (values.password.length > 10) {
      errors.phone = "Phone cannot exceed more than 10 characters";
    }
    if (!values.subject) {
      errors.subject = "Email is required!";
    }
    if (!values.message) {
      errors.message = "Message can't be empty!";
    }
    return errors;
  };

  //end

  return (
    <div className='contactus'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="contact_form">
              <Form className='home_form' onSubmit={handleSubmit}>
                <Row className="mb-2 home_from_row">
                  <Form.Group controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                    <FaUserCircle className='form_icon' />
                    <p className='form_error_message'>{formErrors.name}</p>                        </Form.Group>

                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <FaEnvelope className='form_icon' />
                    <p className='form_error_message'>{formErrors.email}</p>                        </Form.Group>

                </Row>

                <Row className="mb-2 home_from_row">
                  <Form.Group controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      name="phone"
                      placeholder="Enter Phone Number"
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                    <FaPhoneAlt className='form_icon' />
                    <p className='form_error_message'>{formErrors.phone}</p>                        </Form.Group>


                  <Form.Group controlId="formGridName">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Enter Subject"
                      value={formValues.subject}
                      onChange={handleChange}
                    />
                    <FaAlignJustify className='form_icon' />
                    <p className='form_error_message'>{formErrors.subject}</p>                        </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Type your message here...</Form.Label>
                    <Form.Control
                      value={formValues.message}
                      onChange={handleChange}
                      as="textarea" rows={3}
                      name="message" />
                    <p className='form_error_message'>{formErrors.message}</p>
                  </Form.Group>
                </Row>


                <Button className='form_btn' type="submit" >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="contact_form_img">
              <img src="assets/img/contact_img.webp" className="img_contact" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs