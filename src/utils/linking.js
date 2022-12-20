
import { Linking as _linking } from 'react-native'

const Linking = async(url) => {
    await _linking.openURL(url);
}

export default Linking
