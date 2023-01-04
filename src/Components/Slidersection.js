import React from 'react'
import { Link } from 'react-router-dom'

const Slidersection = () => {
  return (
    //  <!-- ======= Hero Section ======= -->
  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>INTERNATIONAL PILATES <span className='dual-text'>CERTIFICATION</span></h1>
          <p><strong>The most sought after Pilates certification, iKore Pilates</strong>  is the most trusted Pilates instructor training and Balanced Body,USA Authorised Training Centre
          founded by Dr. Deepali Gupta (Pilates Ambassador India), who has a proven
          track-record of training and mentoring over 150+ Pilates instructors globally.
          </p>
          <div className="d-flex">
            <Link href="https://www.youtube.com/watch?v=16txccVZSew" className="btn-slider">Play Video</Link>
            <Link href="#" className="btn-slider"> Enroll Now</Link>
          </div>
        </div>
        <div className="col-lg-6">
          {/* <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/> */}
        </div>
      </div>
    </div>
</section>

  )
}

export default Slidersection


