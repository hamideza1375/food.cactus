import React from 'react'
import {Form} from '../../Components/Html';

const CreateChildFood = (p) => {
  const sendCreateChildFood = () => p._admin.createChild()
  return <Form t pr i im {...p} onClick={sendCreateChildFood}/>
}
export default CreateChildFood