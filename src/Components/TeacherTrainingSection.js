import React from 'react'
import { Link } from 'react-router-dom'


const TeacherTrainingSection = () => {
  return (
    <section className='teachertraining_section'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-5 p-0 image_col'>
                <img src='assets/img/teacher_training_section_img.png' className='training_col_img' alt='cta'/>

                  
                </div>
                <div className='col-lg-7 p-0'>
                  <div className='color_col'>
                    <h2 className='headings2'>Pilates Teacher Training Program</h2>
                      <p>An exciting opportunity is awaiting you. Join our Teacher’s 
                        Training Program and become a Pilates Instructor and have the potential
                        to earn a higher income.</p>
                        <br/>
                        <br/>
                        <Link href="#" className="btn_color_col">Enroll Now</Link>
                  </div>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default TeacherTrainingSection