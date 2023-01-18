import React, { lazy, Suspense } from 'react';
import BlogBreadcrum from '../Components/CareerBreadcrum';
// import ContactUs from '../Components/ContactUs';
// import HomeFormSection from '../Components/HomeFormSection'
// import ContactDetails from '../Components/ContactDetails';
// import { useLocation } from 'react-router-dom';
const HomeFormSection = lazy(() => import("../Components/HomeFormSectionForModalTrial"))
const ContactDetails = lazy(() => import("../Components/ContactDetails"))
const CareerBlocks = lazy(() => import("../Components/CareerBlocks"))

const Career = () => {
  // console.log(useLocation())
  // const locationData = useLocation()

  // console.log(locationData)

  return (
    <div className='contact'>
      <BlogBreadcrum />

      <Suspense fallback={<h1>loading..</h1>}>

        <CareerBlocks />

      </Suspense>

    </div>
  )
}

export default Career