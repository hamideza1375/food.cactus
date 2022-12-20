import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function App({ sethidden, hidden, onPress, style, header, body, color, bgcolor, icon, icon2, iconSize, fontSize, iconPress, icon2Press }) {

  const ref = useRef()

  useEffect(() => {
    ref?.current && ref.current.setNativeProps({ style: { height: 0 } })
  }, [hidden])


  return (
    <>
      <View
        onPressIn={onPress}
        activeOpacity={1}
        style={[styles.headView,
        {
          backgroundColor:
            !bgcolor && "#0091EA" ||
            bgcolor == "blue" && "#22f" ||
            bgcolor == "red" && "#f33" ||
            bgcolor == "green" && "#292" ||
            bgcolor == "silver" && "#999" ||
            bgcolor == "black" && "#555" ||
            bgcolor == "yellow" && "orange" ||
            bgcolor && bgcolor
        }
          , { borderRadius: 3 }, style]}>
        <Text
          onPressIn={() => { sethidden(!hidden); setTimeout(() => { sethidden(!hidden) }, 1) }}
          onPress={() => {
            () => { sethidden(!hidden); setTimeout(() => { sethidden(!hidden) }, 2) };
            setTimeout(() => {
              ref.current && ref.current.setNativeProps({ style: { height: null } })
            }, 100);
            

          }} style={[styles.headText, { color: color && color || 'white' }, { fontSize: fontSize ? fontSize : 17 }]}>{header}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 105 }}>
          {icon2 && <Icon onPress={icon2Press} name={icon2} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
          {icon && <Icon onPress={iconPress} name={icon} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
        </View>
      </View>
      <Animated.View ref={ref} style={{ overflow: "hidden" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.subView}>
          <Text style={styles.subText}>
            {body}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}




const styles = StyleSheet.create({
  subView: {
    padding: 5,
    width: "100%",
    borderBottomWidth: .4,
  },
  subText: {
    fontSize: 17,
    fontWeight: '100',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  headView: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headText: {
    padding: 10,
    paddingVertical: 14,
  },
});



// shadowColor: '#55f',
// shadowOffset:3,
// shadowOpacity: 15,
// shadowRadius: 15,

// bgcolor == 'blue' && '#bfd' ||
// bgcolor == 'red' && '#fdb' ||
// bgcolor == 'green' && '#dfd' ||
// bgcolor == 'yellow' && '#ffb' 