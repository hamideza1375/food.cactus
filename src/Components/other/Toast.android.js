
import { ActionSheetIOS, ToastAndroid, Platform } from 'react-native';

export default toast =(toast='') =>{
    if (Platform.OS === 'ios')
    ActionSheetIOS.showActionSheetWithOptions({ options: [toast], cancelButtonIndex: 0, userInterfaceStyle: 'dark' }, sum = () => { return null })
    else
    ToastAndroid.showWithGravityAndOffset(toast, ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
 }