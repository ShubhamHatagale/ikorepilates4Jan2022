import React, { lazy, Suspense } from 'react';
import Breadcrum from '../Components/Breadcrum';
const ClassMat = lazy(() => import('../Components/ClassMat'))
const EquipmentGroup = lazy(() => import('../Components/EquipmentGroup'))
const EquipmentPrivate = lazy(() => import('../Components/EquipmentPrivate'))



const Classes = () => {
  return (
    <div className='classes'>
      <Breadcrum />
      <Suspense fallback={<h1>loading..</h1>}>
        <ClassMat />
        <EquipmentGroup />
        <EquipmentPrivate />
      </Suspense>

    </div>
  )
}

export default Classes