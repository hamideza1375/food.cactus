import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Drawer = ({ group, children, name, style, bgcolor = '#fff', color = "#777", activeColor = "#47f" }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container} >
      <View style={[styles.sidebar, { backgroundColor: bgcolor }, style]} >
        {group.map((item, key) => (
          <View key={key} style={styles.routeView} >
            <Pressable
              onPress={() => navigation.navigate(item.name)}
              style={[styles.pressableActive, { borderBottomColor: name === item.name ? "#47f" : "#f5f5f5", borderBottomWidth: name === item.name ? 2 : 0 }]} >
              <Text style={[styles.textActive,
              { color: name === item.name ? activeColor : color }]}>{item.title}</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <View style={{ height: '92%' }} >
        {children}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    position: 'relative',
    height: '100%',
    flex: 1
  },
  sidebar: {
    height: '8%',
    minHeight: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
      borderRadius: 6,
    },
    zIndex: 100
  },
  routeView: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',

  },
  pressableActive: {
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 5,
  },
  textActive: {
    fontSize: 17,
    color: '#777',
    textAlign: 'center',
  },

})

export default Drawer