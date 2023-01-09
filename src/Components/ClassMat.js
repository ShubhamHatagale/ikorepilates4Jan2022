import React from 'react'

const ClassMat = () => {
  return (
    <div className='classmat pd5'>
        <div className='container-fluid'>
            <div className='row'>
                
                <div className='col-lg-8 p-0'>
                  <div className='color_class_col'>
                    <h2 className='headings2'>MAT CLASSES</h2>
                    <p>Pilates Mat is done on the floor on a mat. It may include Pilates props like the balls, 
                    foam rollers, pilates magic circles and other fitness tools. Batch strength of the class is
                     limited to a maximum of 12 students per batch so that detailed attention can be given to all.
                      Class Level – Expert. Beginner, Intermediate Age Limit – Kids, Adults, Teens.</p>
                       
                  </div>
                </div>
                <div className='col-lg-4 p-0 image_col'>
                <img loading='lazy' src='assets/img/class_mat.webp' className='class_right_img' alt='cta'/>

                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClassMat