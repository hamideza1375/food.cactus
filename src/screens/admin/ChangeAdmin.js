import React from 'react';
import {Form} from '../../Components/Html'

export default function ChangeAdmin(p){
  const sendChangeAdmin = () => p._admin.changeAdmin()
  return <Form webStyle={{height:'calc(100vh - 68px)'}} ph _input {...p} onClick={() => sendChangeAdmin()} />
}