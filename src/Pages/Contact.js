import React from 'react';
import ContactBreadcrum from '../Components/ContactBreadcrum';
// import ContactUs from '../Components/ContactUs';
import HomeFormSection from '../Components/HomeFormSection'
import ContactDetails from '../Components/ContactDetails';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  console.log(useLocation())
  const locationData = useLocation()

  console.log(locationData)

  return (
    <div className='contact'>
      <ContactBreadcrum />
      <ContactDetails />
      <div className="container-fluid">
        <div className='row'>
          <div className="col-lg-7 p-0 form_col_pd">
            <HomeFormSection blogData={{ blogid: locationData.state?locationData.state.enroll_id:0 }} />
          </div>
          <div className="col-lg-5 p-0">
            <div className="contact_form_img">
              <img src="assets/img/test.jpg" className="img_contact" alt="" />
            </div>
          </div>

        </div>
      </div>

      {/* <ContactUs/> */}
    </div>
  )
}

export default Contact