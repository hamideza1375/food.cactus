import React from 'react'
import _Video from "react-native-video";

const Video = (props) => {
  return (
    <_Video
    muted={false}
    repeat={false}
    resizeMode={"cover"}
    rate={1.0}
    controls
    {...props}
    style={[{ width:'100%',height:'100%', backgroundColor:'silver' },props.style]}
    />
  )
}

export default Video