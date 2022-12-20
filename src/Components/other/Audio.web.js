
import React from 'react';
export default function Audio(props) {
  return (
    <audio controls {...props} >
      <source src={props.source.uri} type="audio/ogg" />
      <source src={props.source.uri} type="audio/mpeg" />
    </audio>
  );
}


