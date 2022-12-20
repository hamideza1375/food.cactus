import React from 'react'
import { Text, View } from 'react-native';
import { Modal, Button, Hr, P } from '../../Components/Html';

const _Modal = (p) => {

  const handle = () => {
    if (p.id && p.id2) p._admin.deleteChildFoodAction(p.id, p.id2)
    p.id && !p.id2 && p._admin.deleteFoodAction(p.id) 
    p.setshowModal(!p.showModal);
    p.availabe && p.availabe(false)
  }

  return (
    <View style={{ height: 0 }} >
      <Modal style={{ width: 285, height: 200, backgroundColor: '#eee' }}
        setshow={p.setshowModal} show={p.showModal}>
        <View>
          <P color='#555' mt={12} w={280} ta={'center'} p={7} br={4} children={p.message}/>
        </View>
        <Hr w={220} btc='#aaa' />
        <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
          <Button color='#fff' bgcolor='#5ae' onPress={handle}
            style={{ fontSize: 12, width: 78, marginVertical: 11, height:50 }}>{p.availabe?'نیست':'بله'}</Button>
          <Button outline bgcolor={'#999'} onPress={() => { p.availabe && p.availabe(true); p.setshowModal(!p.showModal) }} style={{ height:50, fontSize: 14, width: 78, marginVertical: 11 }}>{p.availabe?'هست':'خیر'}</Button>
        </View>
      </Modal >
    </View>
  )
}

export default _Modal
