import React from 'react';
import { Text } from 'react-native'
import {Form} from '../../Components/Html'

const Login = (p) => {  
  p._user.mountLogin()
  const sendLogin = () => p._user.sendLoginAction()
  
  return (
        <Form timer p c ch ph checkText="مرا بخاطر بسپار" onClick={() => { p.setchange(!p.change); sendLogin(); }} {...p}>
          <Text onPress={() => p.navigation.navigate('ForgetPass')} >فراموشی رمز عبور</Text>
        </Form>
  )
}
export default Login
