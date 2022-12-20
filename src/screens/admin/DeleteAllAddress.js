import React from 'react'
import { Text, View, FlatList, Platform } from 'react-native';
import { Button } from '../../Components/Html';

const DeleteAllAddress = (p) => {

	p._admin.getAllAddress()
	p._admin.totalAllAddress()
	const deleteAllAddress = () => p._admin.deleteAllAddress()

	return (
		<View style={[{ flexGrow: 1, width: '100%', backgroundColor: '#eee' }, ]} >
			{p.allAddress.length ? <Button w='90%' mb={10} alignSelf='center' bgcolor='red' onPress={() => deleteAllAddress()} >حذف همه</Button> : <></>}

			{p.showBtn && <Button alignSelf='center' outline w='90%' bgcolor='silver' color='#999' onPress={() => { p.setshowBtn(!p.showBtn) }} >جمع ماه گذشته از {p.oldPrice?.split("=") && p.oldPrice.split("=")[0]} = {p.oldPrice?.split("=") && p.spacePrice(p.oldPrice.split("=")[1])} تومان</Button>}
			<Button alignSelf='center' outline bgcolor='black' w={'90%'} border={[0,'#999']} onPress={() => { p.setshowBtn(!p.showBtn) }} > جمع از تاریخ {p.fromMomemt} = {p.spacePrice(p.totalPrices)} تومان</Button>

			{
				p.allAddress?.length ?

					<FlatList
						initialNumToRender={3}
						keyExtractor={(f) => f && f._id.toString()}
						data={p.allAddress}
						contentContainerStyle={{ paddingBottom: 55, }}
						renderItem={({ item, index }) => (
							<View key={item._id} style={{
								alignSelf: 'center',
								borderWidth: .3,
								borderColor:'#888',
								width: '90%',
								marginVertical: 15,
								paddingHorizontal: 15,
								paddingTop: 15,
								backgroundColor: '#f5f5f5',
								borderRadius: 4
							}}>
								<View style={{ borderBottomWidth: .2,borderColor:'#888', paddingBottom: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }} >
									<Text ><Text style={[{
										fontWeight: 'bold',
										textAlign: 'left',
									}]} >نام: </Text>{item.fullname}</Text>
									<View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold', textAlign: 'left' }} >شماره تلفن: </Text><Text  >{item.phone}</Text></View>
								</View>
								<View style={{ borderBottomWidth: .2,borderColor:'#888', padding: 15, width: '100%' }} >
									<Text  ><Text style={{ fontWeight: 'bold', textAlign: 'left' }} >آدرس: </Text>{item.formattedAddress?.split(",")[0] + item.formattedAddress?.split(",")[1]} , {item.streetName}</Text>
								</View>
								<View style={{ borderBottomWidth: .2,borderColor:'#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }} >
									<Text  ><Text style={{ fontWeight: 'bold' }} >پلاک: </Text>{item.floor}</Text>
									<Text  ><Text style={{ fontWeight: 'bold' }} >طبقه: </Text>{item.plaque}</Text>
									<Text  ><Text style={{ fontWeight: 'bold' }} >شماره: </Text>{item.id}</Text>
								</View>
								<View style={{ paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }} >
									<Text  ><Text style={{ fontWeight: 'bold' }} >قیمت: </Text>{p.spacePrice(item.price)} تومان</Text>
									<Text style={{ color: '#ababab', }}>{p.moment(item.createdAt).format('jYYYY/jM/jD hh:mm:ss')}</Text>
								</View>
							</View>
						)} />
					: <></>
			}
		</View>
	)
}

export default DeleteAllAddress