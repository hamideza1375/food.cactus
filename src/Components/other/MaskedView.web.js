import React from 'react';
import { View } from 'react-native';

function MaskedView({ children, source, colors, style }) {
  return (
    <View style={[{
      backgroundImage:source?`url(${source})`: `-webkit-linear-gradient(45deg,${colors})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },style]}>
      {children}
    </View>
  );
}

export default MaskedView