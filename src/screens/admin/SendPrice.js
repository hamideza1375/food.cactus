import React from 'react'
import { Form } from '../../Components/Html'

const SendPrice = (p) => {
  return (
    <Form pr {...p} onClick={()=>{p._food.SendPrice()}} />
  )
}

export default SendPrice