import React, { lazy, Suspense } from 'react'
// import Whychooseus from '../Components/Whychooseus'
// import WhyChooseUsBreadCum from '../Components/WhyChooseUsBreadCum'
const Whychooseus=lazy(()=>import("../Components/Whychooseus"))
const WhyChooseUsBreadCum=lazy(()=>import("../Components/WhyChooseUsBreadCum"))
// end
const WhyChoose = () => {
    return (
        <div className='testimonilasvdo'>
            <Suspense fallback={<h1>loading..</h1>}>
                <WhyChooseUsBreadCum />
                {/* <Whychooseus /> */}
            </Suspense>
            {/* <WhyChoosesvideo /> */}
        </div>
    )
}

export default WhyChoose