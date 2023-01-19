import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarcomp from './Layout/Navbarcomp';
import Blog from './Pages/Blog';
// import BlogView from './Pages/BlogView';
import Career from './Pages/Career';
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
const Education = lazy(() => import('./Pages/Education'))
const TermsPolicy = lazy(() => import('./Layout/TermsPolicy'))
const BlogView = lazy(() => import('./Components/BlogView'))

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
            <Route exact path='/education' element={<Education />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/career' element={<Career />} />
            <Route exact path='/blog_view' element={<BlogView />} />

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