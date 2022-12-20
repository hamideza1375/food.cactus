import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react'
import { Dimensions, View, Text, StyleSheet, Animated, Pressable, Platform, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const width = Dimensions.get('window').width;

const Drawer = ({ color='#222',group, children, name, title, bgcolor = '#fff', style, icon ,iconRight}) => {
  const fadeAnim = useRef(new Animated.Value(-width * 2)).current;
  const shadowRef=useRef()
  const navigation = useNavigation()

  const open = () => {
    setTimeout(() => {
      shadowRef.current && shadowRef.current.setNativeProps({style:{opacity: .3}})
    }, 320);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  const close = () => {
    shadowRef.current && shadowRef.current.setNativeProps({style:{opacity: 0}})
    Animated.timing(fadeAnim, {
      toValue: -width * 2,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const hidden = fadeAnim.interpolate({
    inputRange: [-width * 2, 0],
    outputRange: [0, 1]
  })



  return (
    <View style={[styles.container,{height:Platform.OS !== 'web'?'99.7%':'99.7vh',overflow:'hidden'}]} >
      <View style={[styles.sidebar, { backgroundColor: bgcolor }, style]} >
        <View style={styles.TextHeader}>{iconRight && <Icon name={iconRight.name} onPress={iconRight.onClick} size={25} color={color} /> }</View>
        <Text style={[styles.TextHeader,{color}]}>{title}</Text>
        <Icon onPress={open} name={'bars'} color={color} size={25} style={{padding:2}} />
      </View>

      <View style={{flexGrow:1, maxHeight:'92%'}} >
        {children}
      </View>

      <Animated.View style={[styles.container2,
      { transform: [{ translateX: fadeAnim }], opacity: hidden }]} >
        <Animated.View ref={shadowRef} onStartShouldSetResponder={close} style={[styles.pressable,{backgroundColor: 'black'}]} />
        <ScrollView style={styles.viewDriver} contentContainerStyle={{paddingBottom:130}} >
          {group.map((item, key) => (
            <View key={key} style={styles.routeView} >
              <Pressable
                onPress={() => { navigation.navigate(item.name); close() }}
                style={[styles.viewActive, { backgroundColor: name === item.name? "#ccf9" : "#f5f5f5" }]} >
                <Text style={[styles.textActive, { color: name === item.name? "#49f" : "#444" }]}
                >{item.title}</Text>
                { icon && <Icon size={25} name="user" color={color} style={{ color: name === item.name? "#47e" : "#777" }} /> }
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  TextHeader: {
    fontSize: 17,
    color: '#555',
    paddingBottom: 4,
    minWidth: 30,
    fontFamily:'IRANSansWeb',
  },
  sidebar: {
    height:'8%',
    minHeight:38,
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .2,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
    },
  },
  textActive: {
    color: '#777',
    marginLeft: 'auto',
    marginRight:4,
    fontWeight:'100',
    fontFamily:'IRANSansWeb-light'
  },
  pressable: {
    opacity:0,
    backgroundColor: '#aaa5',
    zIndex: 50,
    width: '100%',
    height: 999,

  },
  routeView: {
    flexDirection: 'row',
    maxHeight: 60,
    minHeight: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    borderRadius: 6

  },
  viewActive: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    width: "95%",
    minHeight:50,
    height: '90%',
    maxHeight: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 6,
    paddingRight: 8,

  },
  viewDriver: {
    left: 0,
    marginTop: -50,
    zIndex: 100,
    position: 'absolute',
    paddingTop: 65,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    width: "70%",
    minWidth:260,
    maxWidth:290,
    height: '100%',
    backgroundColor: '#fff',
    borderWidth: .2,
    borderColor: '#999',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .7,
    shadowRadius: 7,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  container: {
    backgroundColor: '#f5f5f5',
    position: 'relative',
    height: '100%',
    marginTop: 1
  },
  container2: {
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    flexDirection: 'row',
    height: '130%',
    backgroundColor: 'transparent',
    width: '100%'
  },

})

export default Drawer