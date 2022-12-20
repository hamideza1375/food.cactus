import React from 'react';

function Frame(props) {
  return (
    < >
      <iframe style={{flex:1}} {...props} src={props.source.uri} />
    </>
  );
}

export default Frame;

