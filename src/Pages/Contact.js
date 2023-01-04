import React from 'react';
import ContactBreadcrum from '../Components/ContactBreadcrum';
// import ContactUs from '../Components/ContactUs';
import HomeFormSection from '../Components/HomeFormSection'
import ContactDetails from '../Components/ContactDetails';

const Contact = () => {
  return (
    <div className='contact'>
      <ContactBreadcrum/>
      <ContactDetails/>
      <div className="container-fluid">
        <div className='row'>
          <div className="col-lg-7 p-0 form_col_pd">
          <HomeFormSection/>
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