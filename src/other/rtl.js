import { I18nManager } from 'react-native';

export const rtl =()=>{
I18nManager.forceRTL(true)
I18nManager.allowRTL(true)
I18nManager.swapLeftAndRightInRTL(false)
}