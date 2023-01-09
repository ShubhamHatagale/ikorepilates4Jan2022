import React,{lazy,Suspense} from 'react';
import TestimonialBreadcrum from '../Components/TestimonialBreadcrum';

const Testimonialsvideo = lazy(() => import("../Components/Testimonialsvideo"))

const TestimonialsVdo = () => {
  return (
    <div className='testimonilasvdo'>
      <TestimonialBreadcrum />
      <Suspense fallback={<h1>loading..</h1>}>
        <Testimonialsvideo />
      </Suspense>
    </div>
  )
}

export default TestimonialsVdo