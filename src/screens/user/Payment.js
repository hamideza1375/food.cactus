import React from 'react';
import { View } from 'react-native';
import Frame from '../../Components/other/Frame';

function Payment(p) {
  return (
    <View style={{ height: '100vh', width: '100%' }}>
      <Frame source={{ uri: p.route.params.url }} />
    </View>
  )
}
export default Payment;
