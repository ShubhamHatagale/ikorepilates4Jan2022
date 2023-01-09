import React,{lazy,Suspense} from 'react';
import CancellationBreadcrum from '../Components/CancellationBreadcrum';
// import CancellationAndPolicy from '../Components/CancellationAndPolicy';

const CancellationAndPolicy = lazy(() => import("../Components/CancellationAndPolicy"))


const Cancellation = () => {
  return (
    <div className='cancellation_page'>
      <CancellationBreadcrum />
      <Suspense fallback={<h1>loading..</h1>}>
        <CancellationAndPolicy />
      </Suspense>
    </div>
  )
}

export default Cancellation