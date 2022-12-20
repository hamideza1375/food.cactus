import React, { useEffect, useRef } from "react";
import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Dropdown = (props) => {

  const { show, setshow, children, icon, color = '#aaa', showBgcolor = '#fff', style, iconFalse, top, onPress } = props

  const ref = useRef()

  useEffect(() => {
    ref?.current && ref.current.setNativeProps({ style: { transform: [{ scale: 0 }] } })
  }, [show])


  return (
    <Pressable >
      <Pressable
        onPressIn={() => { setshow(!show); setTimeout(() => { setshow(!show) }, 1) }}

        onPress={() => {
          () => { setshow(!show); setTimeout(() => { setshow(!show) }, 2) };
          setTimeout(() => {
            ref?.current && ref.current.setNativeProps({ style: { transform: [{ scale: 1 }] } })
          }, 5);
        }}

        style={[{ flexDirection: 'row', padding: 2, }, style]} >
        {!iconFalse && <Icon color={color} name={top ? 'caret-up' : 'caret-down'} style={[{ top: 3, position: 'relative', right: 1 }, { fontSize: 22.5 }]}></Icon>}
        <Icon color={color} name={icon ? icon : 'trash'} style={[{ fontSize: 22.5 }]}></Icon>
      </Pressable>

      <Pressable
        ref={ref}
        style={[{
          alignSelf: 'center', borderWidth: .5, borderRadius: 3, padding: 3, zIndex: 10, top: top ? -60 : 30, position: 'absolute',
          transform: [{ scale: 0 }], backgroundColor: showBgcolor, minWidth: 100
        }]}>
        {children}
      </Pressable>
    </Pressable>
  );
}

export default Dropdown


