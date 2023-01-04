import React from 'react'
import WhyChooseUsData from './WhyChooseUsData';
import TeacherTrainingBlogs from '../Components/TeacherTrainingBlogs';

// use props
function WhyChooseBox(props) {
  return (
    <div className="why-choose-box">
      <img src={props.imgsrc} alt='ico1' className='' />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  )
}
// end
const Whychooseus = () => {
  return (
    <>
      <div className='breadcrum'>
        <h1 className='breadcrum_title'>Certification</h1>

      </div>
      <TeacherTrainingBlogs />

    </>

  )
}


export default Whychooseus