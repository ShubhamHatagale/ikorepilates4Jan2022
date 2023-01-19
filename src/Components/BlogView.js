import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import WhyChooseUsData from './WhyChooseUsData';
import BlogsArticlesData from './BlogsArticlesData';


// end
const Whychooseus = () => {
  const [open, setOpen] = useState()
 
  const locationData = useLocation();


  useEffect(() => {
    console.log(locationData)

  }, [])
  const BlogRedirect = (e) => {
    console.log(locationData)

  }

  return (
    <section className='whychooseuss pd1 pd2' id="whychooseuss">
      <div className="container">
        <div className="row pd2">

          <div className='col-lg-12 mt-5 '>
            <h4 className='post_title b_title'>{BlogsArticlesData[locationData.state.id].title}</h4>
            <h6>{BlogsArticlesData[locationData.state.id].sub_title}</h6>

            <Link className="blog_img_link">
              <img loading='lazy' src={BlogsArticlesData[locationData.state.id].imgsrc} onClick={BlogRedirect} id='0' alt='movement' />
            </Link>

            <p>{BlogsArticlesData[locationData.state.id].desc} </p>
            <Collapse in={true}>
              <p id="example-collapse-text">
                <div>
                  <b>{BlogsArticlesData[locationData.state.id].heading_para1}</b>
                  <p>{BlogsArticlesData[locationData.state.id].para1}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[locationData.state.id].heading_para2}</b>
                  <p>{BlogsArticlesData[locationData.state.id].para2}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[locationData.state.id].heading_para3}</b>
                  <p>{BlogsArticlesData[locationData.state.id].para3}</p>
                </div>
              </p>

            </Collapse>
          </div>

          <div className='col-lg-2 mt-5'></div>


        </div>



      </div>
    </section>
  )
}


export default Whychooseus