import React from 'react'
import AboutUsSection from '../Components/AboutUsSection';
import AboutBreadcrum from '../Components/AboutBreadcrum';


const About = () => {
  return (
    <div className='about'>
      <AboutBreadcrum/>
      <AboutUsSection/>
    </div>
  )
}

export default About