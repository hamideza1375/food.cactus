import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { P } from '../Html';

const _Button = React.forwardRef((props, ref) => <TouchableOpacity
  ref={e => { if (e) { e.className = Array.isArray(props.class) ? (e.className + ' ' + props.class[0] + ' ' + props.class[1]) : (e.className + ' ' + props.class); }; ref && ref(e); }}
  activeOpacity={0.8} onPress={props.onClick} {...props} style={[{
    paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, textAlign: 'center',
    alignSelf: props.alignSelf,
  }, props.style]}><P style={[{ width:'100%', textAlign:'center' }, props.textStyle]}>{props.children}</P></TouchableOpacity>);


const Button = React.forwardRef((props, ref) => {
  const { alignSelf, style, outline, fontSize = 15, p, pt, pb, pl, pr, pv, ph, h = 46, w, m, mt, mb, ml, mr, mv, mh, color, bgcolor, border = [], flexGrow, flex } = props;
  return (
    !outline ?
      <_Button
        ref={ref}
        {...props}
        style={[
          {
            backgroundColor: (bgcolor == 'red') && '#f33' ||
              (!bgcolor) && '#0099ff' ||
              (bgcolor == 'blue') && '#22f' ||
              (bgcolor == 'green') && '#292' ||
              (bgcolor == 'yellow') && '#fa0' ||
              (bgcolor == 'black') && '#555' ||
              bgcolor
          },
          !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
          { color }, bgcolor == 'white' ? {} :
            {
              borderColor: !border[1] && ((!bgcolor) ? '#0091EA' :
                bgcolor == 'yellow' ? '#ca0' : bgcolor) || border[1]
            }, {
            borderWidth: border[0] ? border[0] : 1,
            height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
            alignSelf, flexGrow, flex
          }, style
        ]}

        textStyle={[
          !color && (bgcolor == 'white' ?
            { color: '#555' } :
            { color: 'white' }) ||
          { color: color },
          {
            paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p,
            paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr,
          }, props.textStyle
        ]} />
      :
      <_Button
        ref={ref}
        {...props}
        style={[
          ,
          bgcolor == 'white' ? {} :
            { borderColor: !border[1] && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff') || border[1] },
          {
            borderWidth: border[0] ? border[0] : 1,
            height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
          },
          style
        ]}

        textStyle={[color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' },
        {
          paddingHorizontal: ph, paddingVertical: pv, fontSize, padding: p,
          paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
        }, props.textStyle]} />
  );
});

export default Button