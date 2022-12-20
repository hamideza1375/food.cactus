import React, { useRef } from "react";
import { Animated, KeyboardAvoidingView, Text } from "react-native";
import { Input } from "./FormComponent";
import Swiper from '../components/Swiper'


export default function ({autoFocus=false,multiline=false,m_icon,iconPress,secureTextEntry,icon,textContentType, autoComplete,keyboardType='default',p, newObj,iconLeft, iconRight,  setBlur, getBlur, state, setState, styles, yub }) {
 

  const fadeAnim = useRef(new Animated.Value(0)).current;


  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };
  const iterPlt = fadeAnim.interpolate({
    inputRange: [0, 5],
    outputRange: ["#f22", "black"]
  })



 
 
  return (
    <KeyboardAvoidingView behavior={"height"} style={[{ height: 70, minHeight: 70, marginVertical: 10, },multiline && {height: 130,minHeight: 130}]}>
      <Animated.View style={[styles.viewInput, { minHeight: 90 },multiline && {height: 120,minHeight: 120}, { marginBottom: 5 }]} >
        <Swiper
          cansel={(iconLeft || iconRight) ? false : true}
          style={[multiline && {height: 115,minHeight: 115}]}
          styleRightIcon={{ top: 37 }}
          styleLeftIcon={{ top: 37 }}
          iconLeft={iconLeft}
          iconRight={iconRight}
        >
          <Text style={[styles.textinput, { marginTop: 5 }, multiline && {marginVertical:5}]} >{p}</Text>
          <Animated.View style={[styles.animatedBorder, getBlur &&  !yub && { borderWidth: 1.2, borderColor: iterPlt, transform: [{ translateX: fadeAnim }] },multiline && {height: '101.8%',minHeight: '101.8%'}]} >
            <Input
              textContentType={textContentType}
              autoComplete={autoComplete}
              keyboardType={keyboardType}
              icon={icon}
              m_icon={m_icon}
              p={p}
              value={state}
              onChangeText={(text) => setState(text)}
              onBlur={() => { setBlur(true);  !yub && fadeOut() }}
              style={[styles.input,multiline && {height: 115,minHeight: 115}]}
              iconPress={iconPress}
              secureTextEntry={secureTextEntry}
              autoFocus={autoFocus}
              multiline={multiline}
            />
          </Animated.View>
          {getBlur && !yub && <Text style={[styles.textinput, { color: 'red' }]} >
            {newObj}
          </Text>
          }
        </Swiper>
      </Animated.View>
    </KeyboardAvoidingView>

  )
}


