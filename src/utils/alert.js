import { Platform, Alert } from 'react-native'

const alertPolyfill = (title, description, options) => {
    const result = window.confirm([title, description].filter(Boolean).join('\n'))

    if (!result) {
        let cancelOption = options.find(({ text }) => text === 'Cancel' || text === 'cancel' || text === 'no' || text === 'ٔNO' )
        cancelOption.text && cancelOption.onPress()
    } 
    else {
        let cancelOption = options.find(({ text }) => text === 'OK' || text === 'ok' || text === 'yes' || text === 'Yes')
        cancelOption.text && cancelOption.onPress()
    }
}

const _Alert =  Platform.OS === 'web' ? {alert:alertPolyfill} : Alert

export default _Alert

 
