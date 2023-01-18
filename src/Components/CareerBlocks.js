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
  const [blog_id, setblog_id] = useState(false);
  // const TeacherTrainingBlogsData=lazy(()=>import("./TeacherTrainingBlogsData"))
  // const navigate = usenavigate()
  const pushtoContact = (e, post_id) => {
    e.preventDefault()
    setblog_id(post_id)

    // navigate("/contact-us",{ state: { name:'Xyz' }})
    // navigate('/contact-us', { state: { enroll_id: post_id } })
    setDisplay1(true)
  }
  return (
    <section className='whychooseus pd1 pd2 bg-white' id="whychooseus">
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
            <HomeFormSectionForModalTrial blogData={{ blogid: blog_id ? blog_id : 0 }} />
          </Suspense>
        </Modal.Body>

      </Modal>
      <div className="container ">
        <div className="row pd2">
          <div className="col-lg-12">
            <div className='row'>
              {/* <h2 className='headings text-center pd4'>OFFERINGS</h2> */}

              <div className="post_box">

                <Link href={"props.post_img_link"} className="post_img_link">

                </Link>
                <Link href={"props.post_title_link"}><h4 className='post_title'>COUNSELLING PSYCHOLOGIST</h4></Link>
                <p>Looking for a counsellor psychologist with 0  to 3 years of experience and who is well-versed in social-emotional learning. The candidate will be responsible for offering patient consultations and implementing individualized psychological treatment.</p>
                <ul><b>JOB DESCRIPTION </b>
                  <li>Listen to patients and identify their core problems.</li>

                  <li>Build strong, long-term relationships based on trust, and monitor patient response to treatment over time.</li>
                  <li>Engage in discussions with patients and make them feel comfortable.</li>
                  <li>Implement individualized treatment programs.</li>
                  <li>Undertake psychometric tests</li>
                  <li>Evaluate patient response to treatment over time.</li>
                  <li>Organize a long-term counselling plan that involves multiple visits.</li>
                  <li>Offer services to all age groups.</li>
                  <li>Conduct both one-on-one and group counselling.</li>
                  <li>Keep a detailed account of the patient's mental health history.</li>
                </ul>

                <ul><b>SKILLS REQUIRED</b>
                  <li>Should be PGDCP Certified</li>
                  <li>Good observational skills and attention to detail.</li>
                  <li>Exceptional interpersonal skills.</li>
                  <li>Excellent written and verbal communication.</li>
                  <li>Should be empathetic when dealing with patients.</li>
                  <li>Should have a highly analytical mindset.</li>
                  <li>Good diagnostic and problem-solving skills.</li>
                </ul>



              </div>


              <div className="post_box">

                <Link href={"props.post_img_link"} className="post_img_link">

                </Link>
                <Link href={"props.post_title_link"}><h4 className='post_title'>FEMALE NUTRITIONIST (Part Time/ Full Time)</h4></Link>
                <p>iKore Pilates is looking for an experienced and energetic nutritionist (0 to 3 years’ experience) who will provide our clients with professional advice on how to implement and maintain a healthy lifestyle. As a specialist in food and nutrition, clients will depend on how you guide them towards better eating and exercise habits.</p>
                <ul><b>JOB DESCRIPTION </b>
                  <li>Identifying Clients’ dietary needs by assessing their health, exercise routine, and food habits.</li>
                  <li>Developing and helping implement personalized nutrition plans for clients.</li>
                  <li>Offering advice on how to stay healthy and providing support to help clients with their progress.</li>
                  <li>Consult with the team of healthcare practitioners and work together with the client.</li>
                  <li>Simplifying important information for clients and explaining the benefits of a healthy diet.</li>
                  <li>Ensuring that you stay updated on the latest nutritional diets and trends.</li>
                  <li>Teaching the public and other health specialists about nutrition through articles and group seminars.</li>
                </ul>

                <ul><b>SKILLS REQUIRED</b>
                  <li>Bachelor’s degree in nutritional science, dietetics, or a relevant field</li>
                  <li>A minimum of 2 years experience as a professional nutritionist</li>
                  <li>In-depth knowledge of biochemistry, research methods, and human physiology</li>
                  <li>Excellent communication and presentation skills</li>
                  <li>A critical thinker with outstanding interpersonal skills</li>
                </ul>



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