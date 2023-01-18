import React, { lazy, Suspense } from 'react'
import Slidersection from '../Components/Slidersection';

const Whychooseus = lazy(() => import('../Components/Whychooseus'))
const WhyPilates = lazy(() => import('../Components/WhyPilates'))
const Services = lazy(() => import('../Components/Services'))

const TeacherTrainingSection = lazy(() => import('../Components/TeacherTrainingSection'))
const Testimonial = lazy(() => import('../Components/Testimonial'))
const TeacherTrainingBlogs = lazy(() => import('../Components/TeacherTrainingBlogs'))
const HomeFormSection = lazy(() => import('../Components/HomeFormSectionForModalTrial'))

const Home = () => {
  return (
    <div className='home'>
      <Slidersection />
      <Suspense fallback={<h1>loading..</h1>}>
        <Whychooseus />
        <WhyPilates />
        <Services />

        {/* <TeacherTrainingBlogs /> */}
        <TeacherTrainingSection />
        <Testimonial />
        <HomeFormSection />
      </Suspense>


    </div>
  )
}

export default Home