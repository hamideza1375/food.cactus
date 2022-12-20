import React from 'react';
import { View, ScrollView } from 'react-native';
import spacePrice from '../../utils/spacePrice';
import { Row, Span, P, Button, H1, H5, H6 } from '../Html';





const Th = (props) => <View {...props} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#888', borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]}>
<H6 style={[{ textAlign: 'center', paddingVertical: 10, }, props.textStyle]}> {props.children}</H6></View>

const Tb = (props) => <View style={[{ flex: 1, backgroundColor: 'white', borderColor: '#aaa', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]}>
<P style={[{ fontFamily:'IRANSansWeb-light',textAlign: 'center', color: '#222', paddingVertical: 10, }, props.textStyle]}> {props.children}</P></View>

const Tbtn = (props) => <View style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5, }, props.style]}><Button {...props} textStyle={[{ fontSize: 15,textAlign:'center' }, props.textStyle]} style={[{ width: '99.9%', flex: 1 }, { paddingHorizontal: 0 }]}>{props.children}</Button></View>
let odd = [];

function Table({children, fontSize, mt = 0, border = [], object, setobject, h, w = '100%', body, header, color, btn1onClick, btn2onClick, btn3onClick, btn4onClick, btn5onClick, btn6onClick, btn7onClick, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn1Opacity, btn2Opacity, btn3Opacity, btn4Opacity, btn5Opacity, btn6Opacity, btn7Opacity
}) {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
      odd.push(i);
  }
  let bgColor = (key) => ([{ backgroundColor: odd.includes(key) ? color[0] : color[1], borderColor: border[1] ? border[1] : color[1] }]);
  let textStyle = { color: color[2], textShadowColor: color[2] };

  if (!object)
    return (
      <View style={{ minWidth: '100%', width:'100%'}}>
        <Row flexDirection='row-reverse'>
          {header.map((f, i) => (<Th style={[bgColor(1)]} textStyle={textStyle} key={i}>{f}</Th>))}
        </Row>
        <Span flex={1}>
          {body.map((f, i) => (
            <ScrollView contentContainerStyle={{ flexDirection: 'row-reverse', flexGrow: 1 }} key={i}>
              {Object.values(f).map((a, n) => (
                btn1onClick && n === 0 ? <Tbtn key={i} onPress={btn1onClick} style={bgColor(i)} textStyle={{ fontSize }} bgcolor={btn1}>{a}</Tbtn> :
                  btn2onClick && n === 1 ? <Tbtn key={i} onPress={btn2onClick} style={bgColor(i)} textStyle={{ fontSize }} bgcolor={btn2}>{a}</Tbtn> :
                    btn3onClick && n === 2 ? <Tbtn key={i} onPress={btn3onClick} style={bgColor(i)} textStyle={{ fontSize }} bgcolor={btn3}>{a}</Tbtn> :
                      btn4onClick && n === 3 ? <Tbtn key={i} onPress={btn4onClick} style={bgColor(i)} textStyle={{ fontSize }} bgcolor={btn4}>{a}</Tbtn> :
                        btn5onClick && n === 4 ? <Tbtn key={i} onPress={btn5onClick} style={bgColor(i)} textStyle={{ fontSize }} bgcolor={btn5}>{a}</Tbtn> :
                          btn6onClick && n === 5 ? <Tbtn key={i} onPress={btn6onClick} style={bgColor(i)} textStyle={{ fontSize }} bgcolor={btn6}>{a}</Tbtn> :
                            btn7onClick && n === 6 ? <Tbtn key={i} onPress={btn7onClick} style={bgColor(i)} textStyle={{ fontSize }} bgcolor={btn7}>{a}</Tbtn> :
                              <Tb key={n} style={bgColor(i)} textStyle={[textStyle, { fontSize }]}>{a}</Tb>
              ))}
            </ScrollView>
          ))}
        </Span>
      </View>
    );


  else
    return (
      <View style={{ width: w, maxHeight: '100%', marginTop: mt, alignItems: 'flex-start'}}>
        <Row fd='row-reverse' w='100%' alignSelf='center'>
          {header.map((f, i) => (<Th style={[bgColor(1)]} textStyle={[textStyle, { fontSize }]} key={i}>{f}</Th>))}
        </Row>
        <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%' }} style={{ width: '100%' }}>
          {object.map((f, i) => (
            <View style={{ flexDirection: 'row-reverse', flexGrow: 1 }} key={i}>
              {body.map((b, n) => (
                btn1onClick && n === 0 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([f, i]); }} onPress={() => { btn1onClick(); }} style={[bgColor(i), btn1Opacity && { opacity: f.available ? 1 : .3 }]} textStyle={{ fontSize }} bgcolor={btn1}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tbtn> :
                  btn2onClick && n === 1 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([f, i]); }} onPress={() => { btn2onClick(); }} style={[bgColor(i), btn2Opacity && { opacity: f.available ? 1 : .3 }]} textStyle={{ fontSize }} bgcolor={btn2}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tbtn> :
                    btn3onClick && n === 2 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([f, i]); }} onPress={() => { btn3onClick(); }} style={[bgColor(i), btn3Opacity && { opacity: f.available ? 1 : .3 }]} textStyle={{ fontSize }} bgcolor={btn3}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tbtn> :
                      btn4onClick && n === 3 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([f, i]); }} onPress={() => { btn4onClick(); }} style={[bgColor(i), btn4Opacity && { opacity: f.available ? 1 : .3 }]} textStyle={{ fontSize }} bgcolor={btn4}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tbtn> :
                        btn5onClick && n === 4 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([f, i]); }} onPress={() => { btn5onClick(); }} style={[bgColor(i), btn5Opacity && { opacity: f.available ? 1 : .3 }]} textStyle={{ fontSize }} bgcolor={btn5}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tbtn> :
                          btn6onClick && n === 5 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([f, i]); }} onPress={() => { btn6onClick(); }} style={[bgColor(i), btn6Opacity && { opacity: f.available ? 1 : .3 }]} textStyle={{ fontSize }} bgcolor={btn6}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tbtn> :
                            btn7onClick && n === 6 ? <Tbtn key={n} onPressIn={() => { setobject && setobject([f, i]); }} onPress={() => { btn7onClick(); }} style={[bgColor(i), btn7Opacity && { opacity: f.available ? 1 : .3 }]} textStyle={{ fontSize }} bgcolor={btn7}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tbtn> :
                              <Tb key={n} style={[bgColor(i)]} textStyle={[textStyle, { fontSize, width: '98%' }]}>{b === 'price' && spacePrice(f.price) || b === 'title' && f.title || b === 'total' && spacePrice(f.total) || b}</Tb>
              ))}
                  {children}
            </View>
          ))}

        </ScrollView>
      </View>
    );
}


export default Table
