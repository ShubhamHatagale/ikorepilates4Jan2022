import React, { lazy, Suspense } from 'react';
import BlogBreadcrum from '../Components/BlogBreadcrum';
import BlogsArticles from '../Components/BlogsArticles';
import TeacherTrainingSection from '../Components/TeacherTrainingSection';
import Whychooseus from '../Components/Whychooseus';
import Testimonial from './OurTeams';
// import ContactUs from '../Components/ContactUs';
// import HomeFormSection from '../Components/HomeFormSection'
// import ContactDetails from '../Components/ContactDetails';
// import { useLocation } from 'react-router-dom';
const HomeFormSection = lazy(() => import("../Components/HomeFormSectionForModalTrial"))
const ContactDetails = lazy(() => import("../Components/ContactDetails"))

const Blog = () => {
  // console.log(useLocation())
  // const locationData = useLocation()

  // console.log(locationData)

  return (
    <div className='contact'>
      <BlogBreadcrum />
      <Suspense fallback={<h1>loading..</h1>}>
        {/* <Whychooseus /> */}
        <BlogsArticles />
        {/* <TeacherTrainingSection /> */}
        {/* <Testimonial /> */}
        {/* <HomeFormSection /> */}
        {/* <div className="container-fluid">
          <div className='row'>
            <div className="col-lg-12 p-5 form_col_pd text-center">
              <h1>Coming Soon</h1>
            </div>
            <div className="col-lg-12 p-0">

            </div>

          </div>
        </div> */}
      </Suspense>

    </div>
  )
}

export default Blog