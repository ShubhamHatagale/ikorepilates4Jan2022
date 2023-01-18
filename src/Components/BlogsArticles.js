import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhyChooseUsData from './WhyChooseUsData';

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
  const [open, setOpen] = useState()
  const [open1, setOpen1] = useState()
  const [open2, setOpen2] = useState()
  const [open3, setOpen3] = useState()

  const ArticleJson = [
    {
      id: 1,
      post_title: `<b>testing</b>`,
      post_img_link: '#',
      post_imgsrc: 'assets/img/movement.png',
      post_title_link: '#',
      post_description: 'Learn how to recognize, improve and teach fundamental movement patterns with the Movement',
      post_btn_link: '#',
    }
  ]
  return (
    <section className='whychooseuss pd1 pd2' id="whychooseuss">
      <div className="container">
        <div className="row pd2">
          
          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>Pilates: The Ultimate Guide to Treating Scoliosis and Improving Posture</h4>
            <h6>Introduction: What is Scoliosis and How Can Pilates Help?</h6>

            <Link className="blog_img_link">
              <img loading='lazy' src={`assets/img/blog1.webp`} alt='movement' />
            </Link>

            <p>Scoliosis is a medical condition that affects the spine and causes it to curve abnormally. It can lead to pain, stiffness, and difficulty performing everyday activities. Fortunately, there are treatments which can assist in managing the symptoms of scoliosis. One such treatment is Pilates – a form of exercise designed to improve posture, flexibility and strength. Through regular Pilates sessions, people with scoliosis can reduce their pain levels and improve their overall quality of life. In this article, we will explore how Pilates can help with scoliosis treatment and what exercises are best for people with this condition. <Link onClick={() => setOpen(!open)} style={{ color: "blue" }}>Read More</Link></p>
            {/* <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
            <Collapse in={open}>
              <p id="example-collapse-text">
                <div>
                  <b>The Benefits of Pilates for Reducing Scoliosis Pain and Improving Posture</b>
                  <p>Pilates is a low-impact exercise that can help to reduce scoliosis pain and improve posture. The combination of stretching, strengthening, and breathing techniques are effective in relieving the symptoms of scoliosis. Pilates can help to improve posture by strengthening the muscles around the spine and reducing any imbalances in muscle strength. Furthermore, it can also help to reduce back pain associated with scoliosis by increasing flexibility, improving circulation, and decreasing stress. By implementing a regular Pilates routine into your lifestyle you can experience the numerous benefits of reducing scoliosis pain and improving posture.</p>
                </div>

                <div>
                  <b>The Best Exercises & Workouts for Strengthening Your Core & Spine with Pilates</b>
                  <p>Pilates strengthens your core and spine and reduces pain from sciatica. Pilates exercises are designed to target the muscles in your lower back, hips, and abdominals that support your spine. These exercises can help improve posture, balance, flexibility, strength, and overall well-being. Pilates can also be used to relieve sciatica nerve pain by targeting the muscles that support the sciatic nerve. By strengthening these key areas of your body with Pilates exercises, you can reduce pain from sciatica and improve overall spinal health.</p>
                </div>

                <div>
                  <b>
                    How To Get Started with Pilates to Treat Your Scoliotic Curves?
                  </b>
                  <p>
                    Pilates is a great way to help treat scoliotic curves. It helps to strengthen the muscles around the spine, improve posture and flexibility, and reduce pain. But getting started with Pilates can be intimidating if you don't know where to begin. iKore Pilates, with its expert instructors, can assist you with the right guidance and routine that will help you manage the scoliotic curves and improve your overall health.

                  </p>
                </div>



              </p>

            </Collapse>
          </div>
          <div className='col-lg-2 mt-5'></div>

          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>Back Pain: Pilates is the Solution!!!</h4>
            {/* <div className='col-lg-4'></div> */}

            <Link className="blog_img_link mt-5">
              <img loading='lazy' src={`assets/img/blog2.webp`} alt='movement' />
            </Link>

            <p>
              Back pain is among the top most common medical issues in the world. Lower back pain is the most common issue and can range from mild to an acute conditions. Back pain happens due to poor posture, muscle strain, overuse injuries, and even stress. In some cases, chronic back pain may result from underlying medical conditions such as arthritis or degenerative disc disease. It's important to understand the causes of back pain in order to treat it properly and prevent future episodes.
              <Link onClick={() => setOpen1(!open1)} style={{ color: "blue" }}>Read More</Link>
            </p>
            <Collapse in={open1}>
              <p id="example-collapse-text">
                <div>
                  <b>
                    How can Pilates help with Back Pain?
                  </b>
                  <p>
                    Pilates is an exercise program designed to improve strength, flexibility, and posture. It has been found to be particularly helpful in relieving back pain and improving posture. Through a series of exercises that focus on the core muscles, Pilates helps to strengthen the muscles of the spine and abdomen, which can help reduce back pain. Additionally, Pilates can improve posture by strengthening the muscles that support the spine and helping to correct any imbalances in muscle tone.
                    For back pain sufferers, in particular, developing awareness of the neutral alignment of the spine and fortifying the deep postural muscles that maintain this alignment are crucial abilities. Pilates helps the muscles of the hip and shoulder girdle become stronger, more flexible, and more supple. These joints move easily and steadily, reducing unneeded torque on the spinal column. The Pilates method also trains patients to be aware of movement patterns that might put a strain on their spines and supports them in switching to patterns that maintain neutral alignment. The patient uses the body effectively with awareness of excessive tension and appropriate attention.
                    But before starting with any Pilates routine, one should take into consideration that it can take several one-on-one Pilates sessions with a qualified Pilates instructor. iKore Pilates expert instructors ensure personalized attention to all its clients. With the technical expertise, enthusiasm, and focused teaching standards, iKore Pilates tries to provide a very comfortable environment to its client along with ensuring a speedy recovery.
                  </p>
                </div>
              </p>


            </Collapse>
          </div>


          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>Celebrities Choose Pilates – Follow Your Favorite Stars to Earn the Killer Body</h4>
            {/* <h6>Introduction: What is Scoliosis and How Can Pilates Help?</h6> */}

            <Link className="blog_img_link">
              <img loading='lazy' src={`assets/img/blog3.webp`} alt='movement' />
            </Link>

            <p>
              Pilates focuses on strengthening and toning the body. It is a low-impact workout that uses controlled movements to target the core, improve posture, and develop strength and flexibility. Pilates can be used to achieve a killer body by targeting specific areas of the body, such as the arms, legs, abs, and glutes. It also helps to improve balance and coordination while increasing energy levels. Celebrities have praised Pilates for its ability to help them achieve their desired body transformation goals safely and effectively.
              <Link onClick={() => setOpen2(!open2)} style={{ color: "blue" }}>Read More</Link>
            </p>
            <Collapse in={open2}>
              <p id="example-collapse-text">
                <div>
                  <b>
                    How Pilates Helps Bollywood Celebrities Achieve an Incredible Physique
                  </b>
                  <p>
                    Pilates has become increasingly popular amongst Bollywood celebrities. It helps them achieve an incredible physique and maintain their fitness levels. Pilates helps these celebrities strengthen their core muscles, improve posture, and build muscle tone. It also increases flexibility and balance, which is essential for performing the high-energy dance moves seen in many Bollywood movies.
                    Bollywood stars such as Aamir Khan, Alia Bhatt Kapoor, Kareena Kapoor Khan, Shilpa Shetty Kundra, and Katrina Kaif have all credited Pilates as part of their fitness routine. They use it to stay in shape and achieve their desired body goals.                    </p>
                </div>
                <div>
                  <b>
                    The Benefits of Pilates For Sporting Performance And Overall Fitness                  </b>
                  <p>
                    Pilates is a form of exercise that offers many benefits for athletes and anyone looking to improve their physical performance. Virat Kohli, Hardik Pandya, Mahesh Bhupathi, and Sania Mirza are a few among the many sports personalities who have incorporated Pilates into their fitness regime. Pilates can also help athletes improve their sports performance by increasing strength, balance, agility, coordination, and endurance. Additionally, it can help reduce the risk of injuries by improving posture and body alignment. With regular practice of Pilates exercises, athletes will see an improvement in overall fitness as well as sports performance.
                  </p>
                </div>


                <div>
                  <b>
                    What are the Different Types of Pilate Exercises, and How do you Choose the Right One?
                  </b>
                  <p>
                    Pilates focuses on strengthening the body while improving flexibility and balance. It can be done at home or at a pilates studio like iKore Pilates. iKore Pilates is becoming increasingly popular as people look for ways to stay fit and healthy. But with so many different types of Pilates exercises available, it can be hard to know which one is right for you. The expert pilates instructors from iKorePilates will assist you in exploring the different types of Pilates exercises and provide tips on choosing the right one to actualize your dream for a fit and healthy body.                  </p>
                </div>



              </p>





            </Collapse>
          </div>

          <div className='col-lg-2 mt-5'></div>

          <div className='col-lg-5 mt-5 '>
            <h4 className='post_title b_title'>Everything You Need to Know About Pilates During Pregnancy: Benefits, Precautions & Recommended Routines</h4>

            <Link className="blog_img_link">
              <img loading='lazy' src={`assets/img/blog4.webp`} alt='movement' />
            </Link>

            <p>
              Prenatal Pilates is a low-impact exercise program designed to help pregnant women maintain their physical and mental health during pregnancy. It can be used to strengthen the body, improve posture, reduce stress, and even prepare for labor. Using Pilates during pregnancy allows women to enjoy the benefits of a healthier lifestyle while still caring for their growing baby.
              <Link onClick={() => setOpen3(!open3)} style={{ color: "blue" }}>Read More</Link>

            </p>
            <Collapse in={open3}>
              <p id="example-collapse-text">
                <div>
                  <b>
                    Understanding the Benefits of Pilates for Expectant Mothers                  </b>
                  <p>
                    Pregnant women often experience a range of physical and emotional changes during pregnancy. Pregnant women need to engage in prenatal exercise programs to cope with these changes. Pilates is one such form of exercise that has been found to be beneficial for expectant mothers. Pilates exercises can help pregnant women stay fit and healthy while also helping them prepare for labor and delivery.
                  </p>                </div>
                <div>
                  <b>
                    Precautions to Take When Practicing Pilates in Pregnancy                  </b>
                  <p>
                    Pregnancy is a special time for women, and it is important to take extra precautions when engaging in physical activities such as Pilates. Pilates can be a great way to stay fit during pregnancy, but there are certain precautions that one should take in order to ensure the safety of both mother and the baby. Pregnant women should be careful not to over-exert themselves or stretch too much. And once the mother gets to 16 weeks of pregnancy, she should avoid exercises where she has to lie on her back. As with all exercises during pregnancy, if the mother feels any pain, it's important to stop immediately. If one is already doing a non-pregnancy Pilates class, the instructor should be informed about the pregnancy as the instructor is trained to work with women during pregnancy.                  </p>
                </div>


                <div>
                  <b>
                    Recommended Routines & Exercises for Pilates in Pregnancy                  </b>
                  <p>
                    The recommended routines & exercises for Pilates in pregnancy are altered to the needs of each individual woman. These exercises focus on strengthening the pelvic floor muscles, improving posture, increasing flexibility and balance, reducing stress levels and promoting relaxation. They also help to prepare the body for labor by building strength in the abdominal muscles. With these routines & exercises, pregnant women can enjoy a safe and comfortable pregnancy with improved physical health.
                    At iKore Pilates, the instructors are fully trained to recommend routines and exercises during pregnancy and will assist the pregnant women to be able to stay active while also helping the body prepare for childbirth.
                  </p>
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