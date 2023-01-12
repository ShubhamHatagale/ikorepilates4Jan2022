import React from 'react'

const AboutUsSection = () => {
  return (
    <div className='about_us_section pd3 pd5'>
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-lg-1 p-0'></div>
          <div className='col-lg-5 p-0 image_col' >
            <img loading='lazy' src='assets/img/aboutus_img.webp' className='aboutus_img' alt='cta' />
          </div>
          {/* <div className='col-lg-2 p-0'>
          </div> */}

          <div className='col-lg-5 p-0' >
            <div className='about_color_col'>
              <h2 className='headings2'>DR. DEEPALI GUPTA</h2>
              <h4>MD( Hom), PGDHM(London), PGDCP, ACSM(USA) NCPT(USA)</h4>
              <h5><strong>International Pilates Master Instructor-Pilates Ambassador India</strong></h5>
              <p>Dr Deepali Gupta is founder of Homeopathic Fitness Studio and iKORE Pilates
                Studio, fully equipped Pilates studio in the whole of India. She is Pilates
                Ambassador India and Balanced Body Master Instructor-(Authorised Teacher Training
                Center), International Pilates Coach. Recently Awarded the Title of Internationally
                recognised Nationally Certified Pilates Teacher (NCPT) by the prestigious NPCP.
                A Fletcher Intensivist, The Garuda method Practioner and YUR Back Coach.
                She holds a Master Degree in Homeopathy Medicine.
                Specialization in Health and Fitness, Diploma in Counselling Psychology.
                She has traveled across the globe and learned Pilates from the best institutes
                in the world. She has been coaching several celebrities, athletes, industrialists,
                and working professionals. She regularly conducts workshops and corporate training
                programs to create awareness on Pilates and have helped many to lead a painless
                life with it. She is a true Fitness Motivator and Influencer.
                Being a doctor and having worked in Fitness Industry for more than 10 years,
                A Counselling Psychologist, Deepali is at her best to analyse the body and give an exercise
                prescription. She is involved in  Philanthropic activities and is attached to several NGOs through
                CSR like SOFOSH and Nirmalaya Trust. She has won Fit and Fab all over India and also won the Style
                Icon 2015. Be Fit Pilates Studio boasts of having European standards and teachings from across the
                globe. Primarily known for her work in Homeopathic practise She has treated over 5000 people and
                changed their lifestyle.
              </p>
              <br />
              <br />
              {/* <Link href="#" className="btn_color_col">Enroll Now</Link> */}
            </div>
          </div>
          <div className='col-lg-1 p-0'></div>

        </div>
      </div>

    </div>
  )
}

export default AboutUsSection