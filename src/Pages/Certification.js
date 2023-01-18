import React, { lazy, Suspense } from 'react'
// import Slidersection from '../Components/Slidersection';
import SlidersectionForCertificatio from '../Components/SlidersectionForCertification';

const Whychooseus = lazy(() => import('../Components/Whychooseus'))
const TeacherTrainingSection = lazy(() => import('../Components/TeacherTrainingSection'))
const Testimonial = lazy(() => import('../Components/Testimonial'))
const TeacherTrainingBlogs = lazy(() => import('../Components/TeacherTrainingBlogs'))
const HomeFormSection = lazy(() => import('../Components/HomeFormSection'))

const Test1 = () => {
  return (
    <div className='home'>
      {/* <Slidersection /> */}
      <SlidersectionForCertificatio />
      <Suspense fallback={<h1>loading..</h1>}>
        {/* <Whychooseus /> */}
        <TeacherTrainingBlogs />
        <TeacherTrainingSection />
        <Testimonial />
        <HomeFormSection />
      </Suspense>


    </div>
  )
}

export default Test1