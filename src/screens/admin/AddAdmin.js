import React from 'react';
import {Form} from '../../Components/Html'

export default function AddAdmin (p) {
  const sendAdmin = () => p._admin.addAdmin()
  return <Form ph webStyle={{height:'calc(100vh - 68px)'}} {...p} onClick={() => sendAdmin()} />
}