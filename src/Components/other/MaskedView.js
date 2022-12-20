import React from 'react'
import { Image, View, Text } from 'react-native'
import MaskedView from '@react-native-community/masked-view'


const MaskedView1 = ({ children, source, colors, style }) => {
  return (
    <MaskedView style={[{ flex: 1, flexDirection: 'row', height: '100%' }, style]}
      maskElement={
        <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          {children}
        </View>
      }>
      {source ? <Image style={{ width: '100%', height: '100%' }} source={source} />
        :
        <>
          {colors &&
            colors.map((color, i) => (
              <View key={i} style={{ flex: 1, height: '100%', backgroundColor: color }} />
            ))
          }
        </>
      }
    </MaskedView>
  )
}

export default MaskedView1



