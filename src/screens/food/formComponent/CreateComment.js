import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import {Form} from '../../../Components/Html';

export const CreateComment = (p) => {
  p._food.unmountComment();
  useEffect(() => p.navigation.setOptions({ headerRight: () => <></> }), [p.showForm2]);
  return <Form mAutoFocus mt={15} style={(Platform.OS === 'ios') && (p.width > p.height) && {paddingBottom:150}} m s c {...p} onClick={() => p._food.sendComment()} />
};
