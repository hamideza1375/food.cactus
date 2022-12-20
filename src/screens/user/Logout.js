import React from "react";
import { View } from 'react-native';

const Logout = (p) => {
  p._user.logout()
  p._food.removeReload()
  return <View />;
};
export default Logout;
