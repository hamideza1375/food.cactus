import { PermissionsAndroid, Platform } from "react-native";
import {launchImageLibrary} from "react-native-image-picker";


export const imagePicker = (mediaType='photo') => new Promise(async (resolve, reject) => {
    launchImageLibrary({ mediaType }, (res) => {
      if (!res.didCancel) { resolve({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }) }
      else alert('دوباره امتحان کنید')
    })
})




// export const cameraPicker = (mediaType='photo') => new Promise(async (resolve, reject) => {
//   if (Platform.OS === 'android') {
//     const permission = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       {
//         title: '',
//         message: '',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK'
//       }
//     );
//     if (permission === 'denied') return;
//     if (permission === 'granted') {

//       ImagePicker.launchCamera({ mediaType }, (res) => {
//         if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; resolve({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
//         else alert('دوباره امتحان کنید')
//       })
//     }
//   }
//   else {
//     ImagePicker.launchCamera({ mediaType }, (res) => {
//       if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; resolve({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
//       else alert('دوباره امتحان کنید')
//     })
//   }
// })

