import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { RTCView as _RTCView, RTCSessionDescription, RTCPeerConnection, RTCIceCandidate, mediaDevices } from 'react-native-webrtc';





const RTCView = (props) => {


  useEffect(() => {

    if (Platform.OS === 'android') {
      const permission = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: '',
          message: '',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      ).then(()=>{})
      }
  }, [])


  return <_RTCView objectFit={props.objectFit} {...props} streamURL={props.streamURL.toURL()} />
}
export {
  RTCView,
  RTCSessionDescription,
  RTCPeerConnection,
  RTCIceCandidate,
  mediaDevices,
}