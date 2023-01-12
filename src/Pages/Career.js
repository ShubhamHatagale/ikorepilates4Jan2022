import React, { lazy, Suspense } from 'react';
import BlogBreadcrum from '../Components/CareerBreadcrum';
// import ContactUs from '../Components/ContactUs';
// import HomeFormSection from '../Components/HomeFormSection'
// import ContactDetails from '../Components/ContactDetails';
// import { useLocation } from 'react-router-dom';
const HomeFormSection = lazy(() => import("../Components/HomeFormSectionForModalTrial"))
const ContactDetails = lazy(() => import("../Components/ContactDetails"))

const Career = () => {
  // console.log(useLocation())
  // const locationData = useLocation()

  // console.log(locationData)

  return (
    <div className='contact'>
      <BlogBreadcrum />
      <Suspense fallback={<h1>loading..</h1>}>
        {/* <ContactDetails /> */}
        {/* <div className="container-fluid">
        <div className='row'>
          <div className="col-lg-7 p-0 form_col_pd">
            <HomeFormSection  />
          </div>
          <div className="col-lg-5 p-0">
            <div className="contact_form_img">
              <img src="assets/img/test.jpg" loading='lazy' className="img_contact" alt="" />
            </div>
          </div>

        </div>
      </div> */}
      </Suspense>

    </div>
  )
}

export default Career