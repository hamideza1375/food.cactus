import React from 'react';
import {Form} from '../../Components/Html'

const Register = (p) => {
  const registerSend = () => p._user.registerSendAction();
  const sendCode = () => p._user.registerSendCode();

  return (
      <>
        {!p.changeRegister ?<Form f p ch ph onClick={() => registerSend()} {...p} />
        :
        <Form $code onClick={() => sendCode()} {...p} />}
      </>
  );
};
export default Register
