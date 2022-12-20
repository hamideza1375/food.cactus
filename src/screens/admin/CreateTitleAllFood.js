import React from 'react'
import {Form} from '../../Components/Html';

const CreateTitleAllFood = (p) => {
  const sendCreateTitleFood = () => p._admin.createTitleFood()
  return <Form t im {...p} onClick={() => { sendCreateTitleFood() }} />
}
export default CreateTitleAllFood