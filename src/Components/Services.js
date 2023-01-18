import React, { Suspense, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhyChooseUsData from './WhyChooseUsData';
import HomeFormSectionForModal from './HomeFormSectionForModal'
import HomeFormSectionForModalTrial from './HomeFormSectionForModalTrial'

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

  const [Display1, setDisplay1] = useState(false);
  const [Display, setDisplay] = useState(false);
  const [blog_id, setblog_id] = useState(false);

  // const navigate = usenavigate()
  const pushtoContact = (e, post_id) => {
    e.preventDefault()
    // console.log(post_id)
    if (post_id == 1) {
      // setblog_id(post_id)
      setDisplay1(true)
    }else{
      // setblog_id(post_id)
      setDisplay(true)
    }


  }



  return (
    <section className='whychooseus pd1 pd2' id="whychooseus">
      <Modal
        size="lg"
        show={Display1}
        onHide={() => setDisplay1(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="modal-dialog-scrollable"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Contact Form</Modal.Title> */}
        </Modal.Header>

        <Modal.Body className="success text-center " >
          <Suspense fallback={<h1>loading..</h1>}>
            <HomeFormSectionForModal blogData={{ blogid: blog_id ? blog_id : 0 }} />
          </Suspense>
        </Modal.Body>

      </Modal>

      <Modal
        size="lg"
        show={Display}
        onHide={() => setDisplay(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="modal-dialog-scrollable"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Contact Form</Modal.Title> */}
        </Modal.Header>

        <Modal.Body className="success text-center " >
          <Suspense fallback={<h1>loading..</h1>}>
            <HomeFormSectionForModalTrial blogData={{ blogid: blog_id ? blog_id : 0 }} />
          </Suspense>
        </Modal.Body>

      </Modal>
      <div className="container">
        <div className="row pd2">
          <div className="col-lg-12">
            <div className='row'>
              <h2 className='headings text-center pd4'>Our Offerings</h2>

              <div className="post_box">

                <Link href={"props.post_img_link"} className="post_img_link">

                </Link>
                <Link href={"props.post_title_link"}><h4 className='post_title'>Pilates Teacher Training Program</h4></Link>
                <p>Are you looking for an exciting opportunity to become a Pilates Instructor? Look no further! </p>
                <p>Join our Teacher's Training Program and get the knowledge and skills you need to become a certified Pilates Instructor. With our comprehensive training program, you will be able to confidently teach classes that are tailored to meet the needs of your clients. Our program offers an in-depth look at the fundamentals of Pilates, from anatomy and physiology to teaching methods. Our program will also help you develop your teaching style by providing guidance on effectively communicating with clients, creating engaging classes that meet their needs, and motivating them to reach their goals.</p>
                <p>So don't miss out on this amazing opportunity – Enrol in our Teacher's Training Program today!</p>

                <Link onClick={(e) => pushtoContact(e, 1)} className="btn-slider"> Enroll Now</Link>
              </div>

              <div className="post_box">

                <Link href={"props.post_img_link"} className="post_img_link">

                </Link>
                <Link href={"props.post_title_link"}><h4 className='post_title'>Group Sessions</h4></Link>
                <p>Pilates group sessions are a great way to stay fit and healthy while having fun and socializing with others. These classes are designed for all levels of ability and experience.	Group sessions provide a supportive environment where participants gain motivation from their peers. Our enthusiastic Pilates Instructors keep it spiced up with all Pilates variants and props.</p>
                <p>So why not Join a Pilates group session today?</p>

                <Link onClick={(e) => pushtoContact(e, "props.post_btn_id")} className="btn-slider"> Enroll Now</Link>
              </div>


              <div className="post_box">

                <Link href={"props.post_img_link"} className="post_img_link">

                </Link>
                <Link href={"props.post_title_link"}><h4 className='post_title'>One-To-One Private Pilates Sessions</h4></Link>
                <p>Pilates one-to-one private sessions are an ideal way to improve your physical and mental well-being. By working closely with a Certified Pilates Instructor, you can develop strength, flexibility and balance in your body while also improving your posture and overall health. The sessions are personalized as per your needs and goals.
                  Whether you're looking for an effective way to stay in shape or seeking relief from chronic pain or injury, Pilates one-to-one sessions are an ideal option for achieving your fitness goals.
                </p>

                <Link onClick={(e) => pushtoContact(e, "props.post_btn_id")} className="btn-slider"> Enroll Now</Link>
              </div>

            </div>
          </div>
          {/* <div className="col-lg-6 bg-color mt-2">
            <img loading='lazy' src='assets/img/banner_logo.jpg' className='batches-img' alt='batches' />
          </div> */}
        </div>

      </div>
    </section>
  )
}


export default Whychooseus