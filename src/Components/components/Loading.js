import React, { useCallback, useState, useRef } from "react";
import { ActivityIndicator, View, Text, Animated, Easing } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';

const Loading = (props) => {
  const { setshowActivity , time, scale, left, right, top, bottom, pos } = props
  const [showLoad, setshowLoad] = useState(true)
  useFocusEffect(useCallback(() => {
      let qq = setTimeout(() => {
        setshowLoad(false)
      }, time ? time : 7100);
    return () => {clearInterval(qq);setshowActivity && setshowActivity(false)}
  }, []))

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const open = () => {
    Animated.timing(fadeAnim, {
      toValue: 45,
      duration: 7000,
      useNativeDriver: false,
      easing: Easing.bounce
    }).start();
  };

  const hidden = fadeAnim.interpolate({
    inputRange: [0, 45],
    outputRange: ['0deg','2000deg']
  })

  useFocusEffect(useCallback(() => {
  open()
}, []))


  return (
    <View height={props.h} style={[{ minWidth: '100%', justifyContent: 'center', alignItems: 'center', top: top?top:40,left,right,bottom, position:pos, zIndex: 1000, }, props.style]} >
      <View style={{ marginBottom: 'auto', }} >
        {showLoad ?
          
          <View style={{width:47,height:47, borderRadius:50, borderWidth:1, borderColor:'#25f'}} >
          <Animated.View style={{width:44,height:44, borderRadius:50, position:'relative', transform:[{rotate:hidden}]}} >
<View style={{width:6,height:6, backgroundColor:'#07d', borderRadius:50, position:'absolute',left:1, top:10}} ></View>
<View style={{width:6,height:6, backgroundColor:'#07d', borderRadius:50, position:'absolute',left:3, top:7}} ></View>
<View style={{width:6,height:6, backgroundColor:'#07d', borderRadius:50, position:'absolute',left:6, top:4}} ></View>
<View style={{width:6,height:6, backgroundColor:'#07d', borderRadius:50, position:'absolute',left:9, top:2}} ></View>
<View style={{width:6,height:6, backgroundColor:'#07d', borderRadius:50, position:'absolute',left:13, top:0}} ></View>
<View style={{width:6,height:6, backgroundColor:'#07d', borderRadius:50, position:'absolute',left:18, top:-1}} ></View>


          </Animated.View>
          </View>

          :
          <View style={{ alignItems: 'center', width:'100%' }}>
            <Icon name="frown-o" size={55} style={[{ marginBottom: 10 }]} />
            <Text children={props.text ? props.text : 'متأستفانه چیزی پیدا نشد'} />
          </View>
        }
      </View>
    </View>
  )
}
export default Loading;
