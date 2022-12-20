import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Modal, Button, Table } from '../../Components/Html';

export default function _listAvailable(p) {
   p._admin.listAvailable()
   const sendTrueAvailable = () => p._admin.sendAvailable()
  return (
    <ScrollView style={{ width: '98%', alignSelf: 'center', marginTop: 15 }} >
      {p.list &&
        <Table
          color={['#555', '#656565', 'white']}
          header={['نمایش', 'عنوان']}
          body={['موجود شد', 'title']}
          btn1onClick={() => { p.setid2(p.list[p.$food[1]]._id); p.setshowModalAvailabe(true); p.setid(p.list[p.$food[1]].refId); p._setid(p.list[p.$food[1]]._id) }}
          object={p.list}
          setobject={p.set$food}
          h={50}
        />
      }
      <Modal style={{ width: 333, height: 165, backgroundColor: '#eee', justifyContent: 'space-around' }} setshow={p.setshowModalAvailabe} show={p.showModalAvailabe}>
        <Text style={{ fontSize: 17 }} >از انتخابتون مطمئنید</Text>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
          <Button color='#fff' bgcolor='#9ad' onPress={sendTrueAvailable} style={{ fontSize: 14, width: 78, marginVertical: 11 }}>بله</Button>
        </View>
      </Modal >
    </ScrollView>
  )
}