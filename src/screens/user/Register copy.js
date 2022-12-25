import React, { useState } from 'react';
import {Form, P} from '../../Components/Html'

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;

let countDown = new Date('Sep 30, 2024 00:00:00').getTime();


const Register = (p) => {
  const [componentSendCode, setcomponentSendCode] = useState(false)
  const [min, setmin] = useState(1000 * 60 * 2)
  const registerSend = () => {
    p._user.registerSendAction();
    setcomponentSendCode(false)
    setTimeout(() => {setcomponentSendCode(true)}, 10000);}
  const sendCode = () => p._user.registerSendCode();

  p.useEffect(() => {
    let d=new Date()
   if(p.changeRegister) if(p.$) p.$.id('top-tab').$({ display: 'none' })
   setInterval(() => {
   let nowDate = new Date().getTime(),
   distance = countDown - nowDate;
   
    setmin(min=>{
     let second2 = Math.floor((distance % (minute)) / second);
      let mins= Math.floor((distance % (hour)) / (minute));
      return mins + ':' + second2
    } )
   }, 1000);


  }, [p.changeRegister])
  

  return (
    <>
    {p.changeRegister ?<Form f p ch ph onClick={() => registerSend()} {...p} />
    :
    <Form $code onClick={() => sendCode()} {...p} ><P style={{color:componentSendCode?'#08f':'#c1c1c1'}} onClick={()=>{componentSendCode && registerSend()}}>ارسال دوباره ی کد</P><P id="resend-code">{min}</P></Form>}
    
  </>
  );
};
export default Register
