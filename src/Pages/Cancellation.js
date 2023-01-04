import React from 'react';
import CancellationBreadcrum from '../Components/CancellationBreadcrum';
import CancellationAndPolicy from '../Components/CancellationAndPolicy';


const Cancellation = () => {
  return (
    <div className='cancellation_page'>
      <CancellationBreadcrum/>
      <CancellationAndPolicy/>
    </div>
  )
}

export default Cancellation