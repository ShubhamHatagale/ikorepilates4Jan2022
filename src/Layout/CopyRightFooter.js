import React from 'react'
const CopyRightFooter = () => {
  return (
    <section className='copy_right_footer'>
       <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                <p>© Copyright {new Date().getFullYear()} BE FIT WELLNESS SOLUTION LLP All Rights Reserved.</p>
            </div>
            {/* <div className="col-lg-6">
                

            </div> */}
          </div>
       </div>
    </section>
  )
}

export default CopyRightFooter