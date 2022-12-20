import React from 'react';
import {Form} from '../../Components/Html';

export default function SendProposal (p) {
  return <Form mAutoFocus m c {...p} onClick={() => p._user.sendProposal()} />
};

