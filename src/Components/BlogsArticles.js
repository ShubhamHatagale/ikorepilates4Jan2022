import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import WhyChooseUsData from './WhyChooseUsData';
import BlogsArticlesData from './BlogsArticlesData';


// end
const Whychooseus = () => {
  const [open, setOpen] = useState()
  const [open1, setOpen1] = useState()
  const [open2, setOpen2] = useState()
  const [open3, setOpen3] = useState()
  const navigate = useNavigate();

  const BlogRedirect = (e) => {
    console.log(e.target.id)
    navigate("/contact-us", { state: { name: 'Xyz' } })

  }

  return (
    <section className='whychooseuss pd1 pd2' id="whychooseuss">
      <div className="container">
        <div className="row pd2">

          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>{BlogsArticlesData[0].title}</h4>
            <h6>{BlogsArticlesData[0].sub_title}</h6>

            <Link className="blog_img_link" to="/blog_view" state={{ id: 0 }} >
              <img loading='lazy' src={BlogsArticlesData[0].imgsrc} alt='movement' />
            </Link>

            <p>{BlogsArticlesData[0].desc} <Link onClick={() => setOpen(!open)} style={{ color: "blue" }}>Read More</Link></p>
            <Collapse in={open}>
              <p id="example-collapse-text">
                <div>
                  <b>{BlogsArticlesData[0].heading_para1}</b>
                  <p>{BlogsArticlesData[0].para1}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[0].heading_para2}</b>
                  <p>{BlogsArticlesData[0].para2}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[0].heading_para3}</b>
                  <p>{BlogsArticlesData[0].para3}</p>
                </div>
              </p>

            </Collapse>
          </div>

          <div className='col-lg-2 mt-5'></div>

          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>{BlogsArticlesData[1].title}</h4>
            <h6>{BlogsArticlesData[1].sub_title}</h6>

            <Link className="blog_img_link mt-5" to="/blog_view" state={{ id: 1 }}>
              <img loading='lazy' src={BlogsArticlesData[1].imgsrc} alt='movement' />
            </Link>

            <p>{BlogsArticlesData[1].desc} <Link onClick={() => setOpen1(!open1)} style={{ color: "blue" }}>Read More</Link></p>
            <Collapse in={open1}>
              <p id="example-collapse-text">
                <div>
                  <b>{BlogsArticlesData[1].heading_para1}</b>
                  <p>{BlogsArticlesData[1].para1}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[1].heading_para2}</b>
                  <p>{BlogsArticlesData[1].para2}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[1].heading_para3}</b>
                  <p>{BlogsArticlesData[1].para3}</p>
                </div>
              </p>

            </Collapse>
          </div>



          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>{BlogsArticlesData[2].title}</h4>
            <h6>{BlogsArticlesData[2].sub_title}</h6>

            <Link className="blog_img_link" to="/blog_view" state={{ id: 2 }}>
              <img loading='lazy' src={BlogsArticlesData[2].imgsrc} alt='movement' />
            </Link>

            <p>{BlogsArticlesData[2].desc} <Link onClick={() => setOpen2(!open2)} style={{ color: "blue" }}>Read More</Link></p>
            <Collapse in={open2}>
              <p id="example-collapse-text">
                <div>
                  <b>{BlogsArticlesData[2].heading_para1}</b>
                  <p>{BlogsArticlesData[2].para1}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[2].heading_para2}</b>
                  <p>{BlogsArticlesData[2].para2}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[2].heading_para3}</b>
                  <p>{BlogsArticlesData[2].para3}</p>
                </div>
              </p>

            </Collapse>
          </div>

          <div className='col-lg-2 mt-5'></div>

          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>{BlogsArticlesData[3].title}</h4>
            <h6>{BlogsArticlesData[3].sub_title}</h6>

            <Link className="blog_img_link" to="/blog_view" state={{ id: 3 }}>
              <img loading='lazy' src={BlogsArticlesData[3].imgsrc} alt='movement' />
            </Link>

            <p>{BlogsArticlesData[3].desc} <Link onClick={() => setOpen3(!open3)} style={{ color: "blue" }}>Read More</Link></p>
            <Collapse in={open3}>
              <p id="example-collapse-text">
                <div>
                  <b>{BlogsArticlesData[3].heading_para1}</b>
                  <p>{BlogsArticlesData[3].para1}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[3].heading_para2}</b>
                  <p>{BlogsArticlesData[3].para2}</p>
                </div>

                <div>
                  <b>{BlogsArticlesData[3].heading_para3}</b>
                  <p>{BlogsArticlesData[3].para3}</p>
                </div>
              </p>

            </Collapse>
          </div>

        </div>



      </div>
    </section>
  )
}


export default Whychooseus