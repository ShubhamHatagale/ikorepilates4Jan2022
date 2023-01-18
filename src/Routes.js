import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarcomp from './Layout/Navbarcomp';
import Blog from './Pages/Blog';
import Career from './Pages/Career';
// import Test1 from './Pages/Test1';
// import Footer from './Layout/Footer';
// import FlashMessage from './Layout/FlashMessage';
// import Home from './Pages/Home';
// import CopyRightFooter from './Layout/CopyRightFooter';
// import Classes from './Pages/Classes';
// import About from './Pages/About';
// import TestimonialsVdo from './Pages/TestimonialsVdo';
// import Cancellation from './Pages/Cancellation';
// import Contact from './Pages/Contact';
// import OurTeams from './Pages/OurTeams';
// import WhyChooseUs from './Pages/WhyChooseUs';
// import Certification from './Pages/Certification';
// import TermsPolicy from './Layout/TermsPolicy';

// const Navbarcomp = lazy(() => import('./Layout/Navbarcomp'))
const Home = lazy(() => import('./Pages/Home'))

const Footer = lazy(() => import('./Layout/Footer'))

const CopyRightFooter = lazy(() => import('./Layout/CopyRightFooter'))

const Classes = lazy(() => import('./Pages/Classes'))
const About = lazy(() => import('./Pages/About'))
const TestimonialsVdo = lazy(() => import('./Pages/TestimonialsVdo'))
const Cancellation = lazy(() => import('./Pages/Cancellation'))
const Contact = lazy(() => import('./Pages/Contact'))
const OurTeams = lazy(() => import('./Pages/OurTeams'))
const WhyChooseUs = lazy(() => import('./Pages/WhyChooseUs'))
const Certification = lazy(() => import('./Pages/Certification'))
const TermsPolicy = lazy(() => import('./Layout/TermsPolicy'))

function Router() {
  return (
    <>

      <BrowserRouter>
        {/* <Headermenu/> */}
        {/* <FlashMessage /> */}

        {/* <Suspense > */}
        {/* <Suspense fallback={<h1>loading..</h1>}> */}
        <Navbarcomp />
        {/* </Suspense> */}
        {/* </Suspense> */}
        <Suspense fallback={<h1>loading..</h1>}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/classes' element={<Classes />} /> */}
            <Route exact path='/classes' element={<Classes />} />
            <Route exact path='/about' element={<About />} />
            
            <Route exact path='/testimonials' element={<TestimonialsVdo />} />
            <Route exact path='/cancellation-and-other-policy' element={<Cancellation />} />
            <Route exact path='/contact-us' element={<Contact />} />
            <Route exact path='/our_team' element={<OurTeams />} />
            <Route exact path='/why_choose_us' element={<WhyChooseUs />} />
            {/* <Route exact path='/certification' element={<Certification />} /> */}
            <Route exact path='/terms_policy' element={<TermsPolicy />} />
            <Route exact path='/certification' element={<Certification />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/career' element={<Career />} />

            {/* <Route exact path='/test2' element={<Test2 />} /> */}

          </Routes>
        </Suspense>
        <Suspense fallback={<h1>loading..</h1>}>
          <Footer />
        </Suspense>

        <Suspense fallback={<h1>loading..</h1>}>
          <CopyRightFooter />
        </Suspense>
      </BrowserRouter>
    </>


  );

}
export default Router;