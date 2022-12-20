import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { Text, View } from 'react-native'

const _404 = () => {
  return (
    <View style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent: 'center', height:300}} >
    <View style={{padding:20,borderRadius:5, alignItems:'center', transform:[{scale:1.2}], color:'#fff',shadowOpacity:.3,shadowRadius:4, shadowOffset:{width:.5,height:.5}}} >
        <Text style={{color:'red',marginBottom:10, fontSize:18}}>404</Text>
        <Text style={{marginBottom:10}}>صفحه ی مورد نظر یافت نشد</Text>
        <Icon name="frown-o" color={'#222'} size={40} />
    </View>
    </View>
  )
}

export default _404