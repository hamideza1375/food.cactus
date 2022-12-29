import React from 'react';
import {Form} from '../../Components/Html'

const Notifee = (p) => {
  p.useEffect(()=>{return()=>{p.settitle('');p.setInfo('')}},[])
  const createNotifee = () => p._admin.notifee()
  return <Form webStyle={{height:'calc(100vh - 68px)'}} t i {...p} onClick={createNotifee} />
}
export default Notifee
