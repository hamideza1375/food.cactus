import React, { useCallback, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';

const Loading = (props) => {
  const { time, scale, left, right, top, bottom, pos } = props
  const [showLoad, setshowLoad] = useState(true)
  useFocusEffect(useCallback(() => {
      let qq = setTimeout(() => {
        setshowLoad(false)
      }, time ? time : 7000);
    return () => (clearInterval(qq))
  }, []))
  return (
    <View height={props.h} style={[{ minWidth: '100%', justifyContent: 'center', alignItems: 'center', top: top?top:40,left,right,bottom, position:pos, zIndex: 1000, }, props.style]} >
      <View style={{ marginBottom: 'auto', }} >
        {showLoad ?
          < ActivityIndicator {...props} style={{ transform: [{ scale:scale? scale: 2 }] }} />
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
