import React from 'react';
import {Div, Form, Span} from '../../Components/Html'
import { ScrollView, Text, View } from 'react-native';

export default function DeleteAdmin (p) {
  const sendDeleteAdmin = () => p._admin.deleteAdmin()
  p._admin.getAlluserAdmin()

  return (
      <>
      <Form webStyle={{height:'calc(100vh - 68px)'}} btn={true} ph {...p} onClick={() => sendDeleteAdmin()} />
       { p.admin.length ?
        <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:15, width:220, height:80,backgroundColor:'silver'}} >
          {p.admin.map((adm,i)=>(
            <View key={i} >
            <Text style={{marginVertical:5 }}>name: {adm.fullname}</Text>
            <View style={{flexDirection:'row-reverse'}} ><Text style={{marginVertical:5 }}>phone:</Text><Text style={{marginVertical:5 }}  >{adm.phone}</Text></View>
            </View>
          ))}
        </View>:
        <></>}
    </>
  )
}