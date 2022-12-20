
import * as React from 'react';
export default function App(props) {
  return (
      <video style={{width:'100%', maxHeight:'100vh', objectFit:'cover'}} autoPlay controls={props.controls} {...props} >
        <source src={props.source.uri} type='video/mp4' />
        <source src={props.source.uri} type='video/ogg' />
      </video>
  );
}