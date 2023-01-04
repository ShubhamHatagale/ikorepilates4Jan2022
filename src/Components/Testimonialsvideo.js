import React from 'react';
// import "node_modules/video-react/dist/video-react.css"; 
// import { Player } from 'video-react';
import TestimonialvdeoData from './TestimonialvdeoData'

function TestimonialVideo(props)
{
    return(
        <div className="video_box">
            <video loop  poster={props.vdo_poster} className='video_tag' controls >
            <source src={props.vdo_src} type={props.vdo_type}/>
            </video>
        </div>
    )
}
const Testimonialsvideo = () => {
  return (
    <div className='testimonialsvideo pd3 pd5'>
        <div className="container">
            <div className="row">
                    {TestimonialvdeoData.map ( (val) =>{
                      return(
                        <div className="col-lg-6"  key ={val.id}>
                            <TestimonialVideo 
                           
                           vdo_src={val.vdo_src}
                           vdo_poster ={val.vdo_poster}
                           vdo_type={val.vdo_type}
                            />
                        </div>

                      );
                    })}
              </div>
            
            
        </div>
    </div>
  )
}

export default Testimonialsvideo