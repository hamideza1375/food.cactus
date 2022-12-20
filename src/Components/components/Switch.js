import React from "react";
import { Switch as _Switch } from "react-native";
const Switch = (props) => {
  return (
      <_Switch
      dir='ltr'
      trackColor={{ false: "#767577", true: "#55ddff" }}
      thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => props.setIsEnabled(!props.isEnabled)}
      value={props.isEnabled}
      {...props}
      />
  );
}
export default Switch;