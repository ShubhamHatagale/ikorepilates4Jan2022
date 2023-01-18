import React from 'react'
import WhyChooseUsData from './WhyChooseUsData';

// use props
function WhyChooseBox(props) {
  return (
    <div className="why-choose-box">
      <img loading='lazy' src={props.imgsrc} alt='ico1' className='' />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}
// end
const Whychooseus = () => {
  return (
    <section className='whychooseus pd1 pd2' id="whychooseus">
      <div className="container">
        <div className="row pd2">
          <div className="col-lg-12">
            <div className='row'>
              <h2 className='headings text-center pd4'>Why Pilates</h2>

              {/* <div className='col-lg-6'>
                <p>We are the premier Pilates Studio and Training Institute of Pune, headed by India’s Master Trainer, Dr. Deepali Gupta who is the Pilates Ambassador of India. We offer top-notch services and a unique fitness experience with our state-of-the-art equipment and experienced instructors who are passionate about helping you reach your goals. We understand that when it comes to fitness, everyone has different needs and goals. That is why we strive to provide personalized training plans for each of our clients. Our certified instructors have years of experience in Pilates and can help you reach your goals faster and more efficiently. With our commitment to excellence, we guarantee that you will leave feeling stronger, healthier, and more confident in your body. </p>

              </div> */}
              <div className="col-lg-1"></div>

              <div className="col-lg-10 bg-color ">
                <img loading='lazy' src='assets/img/why_pilates_logo.webp' className='batches-img' alt='batches' />
              </div>
              <div className="col-lg-1"></div>

            </div>
          </div>
          {/* <div className="col-lg-6 bg-color mt-2">
            <img loading='lazy' src='assets/img/banner_logo.jpg' className='batches-img' alt='batches' />
          </div> */}
        </div>
        <div className="row">
          {WhyChooseUsData.map((val) => {
            return (
              <div className="col-lg-4" key={val.id}>
                <WhyChooseBox

                  imgsrc={val.imgsrc}
                  title={val.title}
                  description={val.description}
                />
              </div>

            );
          })}
        </div>

      </div>
    </section>
  )
}


export default Whychooseus