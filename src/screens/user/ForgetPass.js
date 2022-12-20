import React from 'react'
import { View, Text } from 'react-native'
import {Input, Button} from '../../Components/Html'

const ForgetPass = (p) => {
  p._user.setreplaceInput()
  const handlePhone = () => p._user.smsAction()
  const handleCode = () => p._user.codeAction()

  return (
    <View style={{ flex: 1, margin: 14, backgroundColor: "#fff" }}>
      <View style={{ borderRadius: 4, borderColor: 'silver', borderWidth: 1, padding: 12, flex: 1 }}>
        <View style={styles.viewCnt}>
          {!p.replaceInput ?
            <Text style={{alignSelf:'center'}} >شماره تلفن خودرا وارد کنید</Text>
            :
            <Text style={{alignSelf:'center'}}>کد ارسال شده را وارد کنید</Text>
          }
          {!p.replaceInput ? <View style={styles.viewInput}>
            <Input value={p.myPhone} onChangeText={(text) => p.setmyPhone(text)} style={{ width: '100%' }} p="شماره تلفن" />
            <Button outline style={{width:165, marginTop:20}} onPress={handlePhone} >ارسال</Button>
          </View>
            :
            <View style={styles.viewInput}>
              <Input value={p.myCode} onChangeText={(text) => p.setmyCode(text)} style={{  width: '100%' }} p="ارسال کد" />
              <Button outline style={{width:65, marginTop:10}} onPress={handleCode} >ارسال</Button>
            </View>
          }
        </View>
      </View>
    </View>
  )
}
export default ForgetPass

const styles ={viewCnt :{
  border: 9,
  justifyContent: 'space-between',
  height: 210,
  paddingVertical : 15,
  // margin-top: StatusBar.currentHeight;
},
viewInput :{
  marginHorizontal: '37%',
  width: '85%',
  justifyContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
}}