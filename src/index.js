import { AppRegistry } from 'react-native';
import App from './App';

const iconFontStyles =`
        @font-face { src: url(${require('./assets/fonts/FontAwesome.ttf')}); font-family: FontAwesome;  }
        @font-face { src: url(${require('./assets/fonts/AntDesign.ttf')}); font-family: AntDesign;  }
        @font-face { src: url(${require('./assets/fonts/MaterialIcons.ttf')}); font-family: MaterialIcons;  }
        
        @font-face { font-family: 'IRANSansWeb-FaNum'; src: url(${require('./assets/fonts/IRANSansWeb(FaNum).woff2')}) format('woff2')}
        @font-face { font-family: 'IRANSansWeb'; src: url(${require('./assets/fonts/IRANSansWeb.ttf')}) format('truetype');}
        @font-face { font-family: 'IRANSansWeb-Light'; src: url(${require('./assets/fonts/IRANSansWeb_Light.ttf')}) format('truetype');}
        @font-face { font-family: 'IRANSansWeb-Bold'; src: url(${require('./assets/fonts/IRANSansWeb_Bold.ttf')}) format('truetype');}

         }`

const style = document.createElement('style');
style.appendChild(document.createTextNode(iconFontStyles));
document.head.appendChild(style);

AppRegistry.registerComponent('newprj1', () => App)
AppRegistry.runApplication('newprj1', { rootTag: document.getElementById('root') });





