import { PermissionsAndroid } from 'react-native';
import * as RNFS from 'react-native-fs';
import { create } from './notification'

async function download(url,filename,setprogress) {

  let prgs;
  if (Platform.OS === 'android') {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: '',
        message: '',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    );
    if (permission === 'denied') return;
    if (permission === 'granted') {
      RNFS.downloadFile({
        fromUrl: url,
        toFile: `${RNFS.DownloadDirectoryPath}/${filename}`,
        discretionary: true,
        progress: (res) => {
          let progressPercent = (res.bytesWritten / res.contentLength * 100).toString()
          prgs = progressPercent.slice(0, 2)
          if (prgs >= '98') prgs = '100'
          setprogress(prgs + '%')
        },
      }).promise
        .then(() => {
          create(filename,'100%',null,filename)
          setprogress('100%')
        })
        .catch((err) =>create(filename,'خطا',null,filename))
    }
  }


  else 
  RNFS.downloadFile({
    fromUrl: url,
    toFile: `${RNFS.DownloadDirectoryPath}/${filename}`,
    discretionary: true,
    begin: () => {
      setprogress(true)
    },
  }).promise
    .then(() => {
      create(filename,'100%',null,filename)
      setprogress('100%')
    })
    .catch((err) =>create(filename,'خطا',null,filename))
}


export default download