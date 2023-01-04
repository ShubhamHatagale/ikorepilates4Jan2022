import React from 'react'
import Slidersection from '../Components/Slidersection';
import Whychooseus from '../Components/Whychooseus';
import TeacherTrainingSection from '../Components/TeacherTrainingSection';
import Testimonial from '../Components/Testimonial';
import TeacherTrainingBlogs from '../Components/TeacherTrainingBlogs';
import HomeFormSection from '../Components/HomeFormSection';
const Home = () => {
  return (
    <div className='home'>
      <Slidersection/>
      <Whychooseus/>
      <TeacherTrainingBlogs/>
      <TeacherTrainingSection/>
      <Testimonial/>
      <HomeFormSection/>
      

    </div>
  )
}

export default Home