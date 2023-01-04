import React from 'react'
import WhyChooseUsData from './WhyChooseUsData';

// use props
function WhyChooseBox(props)
{
    return(
        <div className="why-choose-box">
            <img src={props.imgsrc} alt='ico1'  className=''/>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    )
}
// end
const Whychooseus = () => {
  return (
    <section className='whychooseus pd1 pd2' id="whychooseus">
        <div className="container">
            <div className="row pd2">
                <div className="col-lg-6">
                    <h2 className='headings'>Why Choose Us</h2>
                    <p>We are the most trusted Pilates training institute, 
                       headed by India’s Master Trainer, Dr. Deepali Gupta who is the Pilates
                       Ambassador of India. Our graduates currently teach Pilates professionally
                       across the globe with an enhanced income potential and desirable career
                       opportunity. </p>
                </div>
                <div className="col-lg-6 bg-color">
                    <img src='assets/img/batches-3.png' className='batches-img' alt='batches'/>
                </div>
            </div>       
          <div className="row">
            {WhyChooseUsData.map ( (val) =>{
              return(
                <div className="col-lg-4"  key ={val.id}>
                <WhyChooseBox 
               
                imgsrc={val.imgsrc}
                title={val.title}
                description={val.description}
                />
                </div>

              );
            })}
        </div>
    </div>
</section>
  )
}


export default Whychooseus