import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarcomp from './Layout/Navbarcomp';
import Footer from './Layout/Footer';
// import FlashMessage from './Layout/FlashMessage';
import Home from './Pages/Home';
import CopyRightFooter from './Layout/CopyRightFooter';
import Classes from './Pages/Classes';
import About from './Pages/About';
import TestimonialsVdo from './Pages/TestimonialsVdo';
import Cancellation from './Pages/Cancellation';
import Contact from './Pages/Contact';
import OurTeams from './Pages/OurTeams';
import WhyChooseUs from './Pages/WhyChooseUs';
import Certification from './Pages/Certification';
import TermsPolicy from './Layout/TermsPolicy';


function Router() {
  return (
    <>

      <BrowserRouter>
        {/* <Headermenu/> */}
        {/* <FlashMessage /> */}

        <Navbarcomp />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/classes' element={<Classes />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/testimonials' element={<TestimonialsVdo />} />
          <Route exact path='/cancellation-and-other-policy' element={<Cancellation />} />
          <Route exact path='/contact-us' element={<Contact />} />
          <Route exact path='/our_team' element={<OurTeams />} />
          <Route exact path='/why_choose_us' element={<WhyChooseUs />} />
          <Route exact path='/certification' element={<Certification />} />
          <Route exact path='/terms_policy' element={<TermsPolicy />} />

        </Routes>
        <Footer />
        <CopyRightFooter />
      </BrowserRouter>
    </>


  );

}
export default Router;