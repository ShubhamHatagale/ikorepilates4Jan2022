import React, { lazy, Suspense } from 'react'
import AboutBreadcrum from '../Components/AboutBreadcrum';

const AboutUsSection = lazy(() => import('../Components/AboutUsSection'))

const About = () => {
  return (
    <div className='about'>
      <AboutBreadcrum />
      <Suspense fallback={<h1>loading..</h1>}>
        <AboutUsSection />
      </Suspense>
    </div>
  )
}

export default About