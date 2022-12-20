import React from 'react';
import { View } from 'react-native-web';

export default function LinearGradient({children,colors=[],start={},style}) {
  return (
    <View style={[{ backgroundImage: `linear-gradient( ${start.x}deg, ${colors} ) ` },style]}>
      {children}
    </View>
  );
}
