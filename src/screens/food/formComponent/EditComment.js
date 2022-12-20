import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import {Form} from '../../../Components/Html';

export const EditComment = (p) => {
  const editComment = ()=> p._food.editComment(p.id3)
  p._food.getEditComment(p.id3);
  p._food.unmountComment();
  useEffect(() => p.navigation.setOptions({ headerRight: () => <></> }), [p.showForm, p.id3]);
  return <Form mt={10} style={(Platform.OS === 'ios') && (p.width > p.height) && {paddingBottom:150}} mAutoFocus bgcolor='#fff' m s c {...p} onClick={editComment} />
};
