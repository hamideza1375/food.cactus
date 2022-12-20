import React from 'react'
import { Platform, View } from 'react-native'
import { Img } from '../../../Components/Html'
import s from '../Food.module.scss'
let box
const Svg = (p) => {
if(p.width <= 500) box = '270 15 880 270'
else box = '200 60 1100 240'
  return (
      <View style={[{width:'100%',height:190},Platform.OS === 'web' ?{top:0}:{ top: 0, borderTopWidth: 1 }]}  >
        <svg style={{left:0,position:'absolute', maxHeight:160 }} viewBox={box}><path fill="#103" d="M0,224L80,240C160,256,320,288,480,261.3C640,235,800,149,960,101.3C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0"></path></svg>
        <Img style={{borderRadius:40}} class={s.smallLogo} src={require('../../../assets/images/logo.jpg')} />
      </View>
  )
}

export default Svg