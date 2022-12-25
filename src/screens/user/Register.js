import React from 'react';
import { Form, P } from '../../Components/Html'

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

const Register = (p) => {

  const registerSend = () => p._user.registerSendAction();  
  const sendCode = () => p._user.registerSendCode();

  return (
    <>
      {!p.changeRegister ? <Form f p ch ph onClick={() => registerSend()} {...p} />
        :
        <Form $code onClick={() => sendCode()} {...p} ><P style={{ color: p.componentSendCode ? '#08f' : '#c1c1c1' }} onClick={() => { if(p.componentSendCode) registerSend() }}>ارسال دوباره کد. بعد از دو دقیقه</P><P id="resend-code">{p.min}</P></Form>}

    </>
  );
};
export default Register
