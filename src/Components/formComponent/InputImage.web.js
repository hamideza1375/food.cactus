import React, { useRef } from "react";
import { Animated, Text, View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import Swiper from '../components/Swiper'


function InputImage({ imIconLeft,imIconRight,imageUrl,setImageUrl,_imageUrl,newObj,img,styles}) {
 


    return (
        <View style={{ height:70,minHeight:70,marginVertical:10 }}>
          <Animated.View style={[styles.viewInput, { minHeight: 90 }, { marginBottom: 5 }]} >
            <Swiper cansel={(imIconLeft || imIconRight) ? false : true} style={{  }}
              styleRightIcon={{ top: 37 }}
              styleLeftIcon={{ top: 37 }}
              iconLeft={imIconLeft}
              iconRight={imIconRight}
            >
              <Text style={[styles.textinput, { marginTop: 5 }]} >انتخاب عکس</Text>
              <Animated.View style={[styles.animatedBorder,
              _imageUrl && !img &&
              {borderWidth: 1.2,borderColor:_imageUrl && !img?'red':'#222'}]} >
                <View style={{border:'1px solid #111', marginBottom: 5,
                  height: 50,
                  backgroundColor:'#fff',
                  justifyContent:'center',
                  minWidth: '90%',borderRadius:5, boxShadow:'1px 1px 4px #0007'}} >
              <View style={{position:'absolute', height:'100%', width:'14.8%',maxWidth:80, left:0,borderRightWidth:.8,borderColor:'#111',alignItems:'center', justifyContent:'center'}} >
               <Icon style={{}} name={'image'} size={22} color={"#222"} />
               </View>
               <Text style={{width:'85%',position:'absolute',Top:5,paddingRight:12, color:'#666'}} >{imageUrl?(!imageUrl.name?imageUrl:imageUrl.name):'انتخاب عکس از گالری'}</Text>
                <input
                type={'file'}
                accept="image/*"
                placeholder=" انتخاب از گالری "
                onChange={(event)=>{setImageUrl(event.target.files[0])}}
                style={{opacity:0, width:'100%',minHeight:'100%'}}
                />
                </View>
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