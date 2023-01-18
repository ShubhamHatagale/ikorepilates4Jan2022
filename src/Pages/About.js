import React, { lazy, Suspense } from 'react'
import SlidersectionForAbout from '../Components/SlidersectionForAbout';

const Whychooseus = lazy(() => import('../Components/Whychooseus'))
const TeacherTrainingSection = lazy(() => import('../Components/TeacherTrainingSection'))
const Testimonial = lazy(() => import('../Components/Testimonial'))
const TeacherTrainingBlogs = lazy(() => import('../Components/TeacherTrainingBlogs'))
const HomeFormSection = lazy(() => import('../Components/HomeFormSection'))

const ClassMat = lazy(() => import('../Components/ClassMat'))
const EquipmentGroup = lazy(() => import('../Components/EquipmentGroup'))
const EquipmentPrivate = lazy(() => import('../Components/EquipmentPrivate'))
const AboutUsSection = lazy(() => import('../Components/AboutUsSection'))

const Test2 = () => {
  return (
    <div className='home'>
      {/* <ClassMat /> */}

      <SlidersectionForAbout />

      <Suspense fallback={<h1>loading..</h1>}>
        
        <Suspense fallback={<h1>loading..</h1>}>
          <AboutUsSection />
        </Suspense>

      </Suspense>
    </div>
  )
}

export default Test2