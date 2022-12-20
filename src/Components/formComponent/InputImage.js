import React from "react";
import { Animated, Text, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Input } from "./FormComponent";
import Swiper from '../components/Swiper'

function InputImage({ imIconLeft,imIconRight,imageUrl,setImageUrl,_imageUrl,newObj,img,styles}) {
   
    const pickImage = () => {
      launchImageLibrary({ mediaType: 'photo' }, (res) => {
        if (!res.didCancel) setImageUrl({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri })
        else console.log('err');
      })
  }

  // const pickVideo = () => {
  //   launchImageLibrary({ mediaType: 'video' }, (res) => {
  //      if (!res.didCancel) setVideoUrl({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri })
  //     else console.log('err');
  //   })
  // }

  // const pickMix = () => {
  //   launchImageLibrary({ mediaType: 'mixed' }, (res) => {
  //     if (!res.didCancel) setMixUrl({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri })
  //     else console.log('err');
  //   })
  // }
 
    return (
      <View style={{ minHeight: 70, height:70, marginVertical:12}}>
        <Animated.View style={[styles.viewInput, { minHeight: 90 }, { marginBottom: 5 }]} >
          <Swiper cansel={(imIconLeft || imIconRight) ? false : true} style={{ height: '100%', marginBottom: 20, paddingBottom: 20 }}
            styleRightIcon={{ top: 37 }}
            styleLeftIcon={{ top: 37 }}
            iconLeft={imIconLeft}
            iconRight={imIconRight}
          >
            <Text style={[styles.textinput, { marginTop: 5 }]} >انتخاب عکس</Text>
            <Animated.View onTouchStart={pickImage} style={[styles.animatedBorder,
            _imageUrl && !img &&
            {borderWidth: 1.2, borderColor:'red'}]} >
              <Input
                editable={false}
                p=" انتخاب از گالری "
                icon={'image'}
                value={imageUrl.name}
                style={styles.input}
              />
            </Animated.View>
            {_imageUrl && !img && <Text style={[styles.textinput, { color: 'red' }]} >
                {newObj}
            </Text>}
          </Swiper>
        </Animated.View>
      </View>
    )
  }
  
  export default InputImage