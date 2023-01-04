import React from 'react';
import Breadcrum from '../Components/Breadcrum';
import ClassMat from '../Components/ClassMat';
import EquipmentGroup from '../Components/EquipmentGroup';
import EquipmentPrivate from '../Components/EquipmentPrivate';

const Classes = () => {
  return (
    <div className='classes'>
    <Breadcrum/>
    <ClassMat/>
    <EquipmentGroup/>
    <EquipmentPrivate/>

    </div>
  )
}

export default Classes