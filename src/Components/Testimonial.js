import React from 'react'
import TestimonialData from './TestimonialData'

// use props
function TestimonialBox(props) {
  return (
    <div className="testimonial_box">
      <p>{props.testimonial_text}</p>
      <br />
      <h6>{props.testimonial_name}</h6>
    </div>

  );
}
// end
const Testimonial = () => {
  return (
    <section className="testimonial pd1 pd2" id="testimonials">
      <div className="container">
        <div className="row">
          <h2 className='headings text-center pd4'>Testimonials</h2>
          {TestimonialData.map((val) => {

            return (
              <div className="col-lg-4" key={val.id}>
                <TestimonialBox

                  testimonial_text={val.testimonial_text}
                  testimonial_name={val.testimonial_name}

                />
              </div>

            );
          })}
        </div>

      </div>
    </section>
  )
}

export default Testimonial