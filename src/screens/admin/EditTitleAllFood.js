import React from 'react'
import {Form} from '../../Components/Html';
import  Title from '../../utils/setTitle';

const EditFood = (p) => {
  Title()
  p._food.getSingleTitleFoods()
  const editeTitltFood = () => p._admin.editeFoods()
  return <Form t im edit {...p} onClick={() => { editeTitltFood(); }}/>
}
export default EditFood
