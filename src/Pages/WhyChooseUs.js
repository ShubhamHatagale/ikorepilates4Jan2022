import React, { lazy, Suspense } from 'react'
// import WhyChooseUsBreadCum from '../Components/WhyChooseUsBreadCum'

const WhyChooseUsBreadCum=lazy(()=>import("../Components/WhyChooseUsBreadCum"))
// end
const WhyChoose = () => {
    return (
        <div className='testimonilasvdo'>
            <Suspense fallback={<h1>loading..</h1>}>
                <WhyChooseUsBreadCum />
            </Suspense>
            {/* <WhyChoosesvideo /> */}
        </div>
    )
}

export default WhyChoose