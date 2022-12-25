import React from "react";
import { Image, View, ScrollView, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChildFood from "./screens/food/ChildFood";
import SingleFood from "./screens/food/SingleFood";
import ForgetPass from "./screens/user/ForgetPass";
import ResetPass from "./screens/user/ResetPass";
import Payment from "./screens/user/Payment";
import Logout from "./screens/user/Logout";
import Login from "./screens/user/Login";
import Register from "./screens/user/Register";
import Home from "./screens/food/Home"
import Location from "./screens/user/Location"
import Profile from "./screens/user/Profile"
import LastPayment from "./screens/user/LastPayment";
import FinallFoodPayment from "./screens/food/FinallFoodPayment"
import AdminTitleAllFood from "./screens/admin/AdminTitleAllFood";
import AdminChildTable from "./screens/admin/AdminChildTable"
import EditTitleAllFood from './screens/admin/EditTitleAllFood';
import EditChildFood from './screens/admin/EditChildFood';
import CreateTitleAllFood from './screens/admin/CreateTitleAllFood';
import CreateChildFood from './screens/admin/CreateChildFood';
import ListAvailable from './screens/admin/ListAvailable';
import { states, propTypes } from "./utils/context/contexts";
import Address from "./screens/admin/Address";
import DeleteAllAddress from "./screens/admin/DeleteAllAddress";
import AddAdmin from "./screens/admin/AddAdmin";
import DeleteAdmin from "./screens/admin/DeleteAdmin";
import Notifee from './screens/admin/Notifee';
import ChangeAdmin from "./screens/admin/ChangeAdmin";
import { Div, Input, Loading, P, Row, Span } from "./Components/Html";
import { Init } from "./Components/Html";
import { Layout, header } from "./other/Layout";
import _404 from "./other/404"
import ToastProvider, { Toast } from "./utils/toast";
import { userState } from "./state/userState";
import { foodState, home } from "./state/foodState";
import { adminState } from "./state/adminState";
import { NavigationContainer } from '@react-navigation/native';
import Micon from "react-native-vector-icons/dist/MaterialIcons";
import { LogBox } from 'react-native';
import { rtl } from "./other/rtl"
import SendProposal from "./screens/user/SendProposal";
import GetProposal from "./screens/admin/GetProposal";
rtl()
LogBox.ignoreAllLogs();

const Tab = createNativeStackNavigator()
const Food = () => {
  let icon = Platform.OS === 'ios' ? {headerLeft: header} : {}
  const allState = states()
  const toast = new Toast(allState)
  const p = { ...allState, toast }
  home(p)
  const ChangeStyle = (p.width > p.height) ? { marginBottom: 10, flex: 1 } : { flex: 1 }
  const _food = ({ navigation, route }) => new foodState({ ...p, navigation, route })
  const _user = ({ navigation, route }) => new userState({ ...p, navigation, route })
  const _admin = ({ navigation, route }) => new adminState({ ...p, navigation, route })
  const reducer = (props) => ({ _food: _food(props), _user: _user(props), _admin: _admin(props), _scrollView: (p) => <ScrollView style={[ChangeStyle, p.style]} {...p} contentContainerStyle={[{ flexGrow: 1, width: '100%', height: '100%' }, p.contentContainerStyle]} >{p.children}</ScrollView> })
  let imageStyle
  if (allState.width <= 650) imageStyle = { width: allState.width, height: allState.width }
  if (allState.width > 650) imageStyle = { width: 600, height: 600 }
  // const children = (props) => <Layout {...props}  {...p} ><Home {...props} {...p}  {...reducer(props)} /></Layout>; // const _children={children}
  const _children=(Component,key)=>({children:(props) => <Layout _key={key} {...props} {...p} >{p.showActivity && <Loading setshowActivity={p.setshowActivity} pos='absolute' top={15} time={900000} />}
   {p.lastPayment?.enablePayment === 1 && <Span bgcolor='#0fba' ph={9} br={5} style={{position:'absolute',bottom:2, zIndex:9999999999, alignSelf:'center'}}><P>سفارش شما در حال آماده سازی و ارسال هست</P></Span>} 
   <Component {...props} {...p} {...reducer(props)} /></Layout>})
  return (
    allState.splash ?
      <Div style={{ width: '100%', height: Platform.OS === 'web' ? '100vh' : '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff' }} >
        <Image source={require('./assets/images/logo.jpg')} style={[{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', borderRadius: 5, marginTop: Platform.OS === 'ios' ? 50 : 0 }, imageStyle]} />
      </Div>
      :
      <>
        <Init ref={(e) => allState.set$(e)} id={'s'} />
        
        <ToastProvider {...p} />
        <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' ,...icon}}} >
          <Tab.Group screenOptions={{ headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} >
            <Tab.Screen name="Home" options={() => ({ title: 'فسفود کاکتوس', headerStyle: { backgroundColor: '#103' },headerLeft:()=><></>})} {..._children(Home)} />
            <Tab.Screen name="ChildFood" options={({ route }) => ({ title: route.params.title, headerShown: false })} {..._children(ChildFood)} />
            <Tab.Screen name="SingleFood" options={({ route }) => ({ title: route.params.title })} {..._children(SingleFood)} />
          </Tab.Group>
          <Tab.Group screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Register" options={{ title: 'ثبت نام' }} {..._children(Register,'120')} />
            <Tab.Screen name="Login" options={{ title: 'ورود' }} {..._children(Login,'120')} />
            <Tab.Screen name="ForgetPass" options={{ title: 'فراموشی رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ForgetPass)} />
            <Tab.Screen name="ResetPass" options={{ title: 'عوض کردن رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ResetPass)} />
            <Tab.Screen name="Logout" options={{ title: 'خروج' }} {..._children(Logout)} />
            <Tab.Screen name="Profile" options={{ title: 'پروفایل' }} {..._children(Profile,'100')} />
            <Tab.Screen name="SendProposal" options={{headerShown: true, headerTitleStyle: { color: '#222', fontFamily:'IRANSansWeb', fontSize:15 }, title: 'ارسال نظرات و پیشنهادات' }} {..._children(SendProposal)} />
            <Tab.Screen name="LastPayment" options={{ title: 'آخرین خرید' }} {..._children(LastPayment,'100')} />
          </Tab.Group>
          <Tab.Group screenOptions={{ headerShown: false }} >
            <Tab.Screen name="FinallFoodPayment" options={{ title: 'سبد خرید', headerShown: Platform.OS !== 'web' ? true : false, headerStyle: { backgroundColor: '#fa0' } }} {..._children(FinallFoodPayment)} />
            <Tab.Screen name="Location" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {..._children(Location)} />
            <Tab.Screen name="Payment" options={{ title: 'پرداخت' }} {..._children(Payment)} />
          </Tab.Group>
          <Tab.Group>
            <Tab.Screen initialParams={{ key: 'admin' }} name="AdminTitleAllFood" options={{ title: 'پنل ادمین', headerShown: false }} {..._children(AdminTitleAllFood)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="AdminChildTable" options={({ route }) => ({ title: route.params.title, header: (props) => <Row bgcolor='#fff' style={{ shadowRadius: 7, shadowOpacity: .2, marginTop: Platform.OS === 'ios' ? 40 : 0, justifyContent: 'space-around' }} mb={5} ><Input alignSelf='center' mt={5} mb={2} w='80%' placeholderColor='red' iconColor='#777' border={[1, '#aaa']} icon='search' value={p.textSearch} onChangeText={(text) => { _food(props).sercher(text); p.settextSearch(text) }} placeholder="جستجو" /><Micon name='arrow-back' onPress={() => { props.navigation.navigate('AdminTitleAllFood') }} style={{ height: 42, width: 35, marginTop: 17, textAlign: 'center' }} size={27} /></Row>})} {..._children(AdminChildTable)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditTitleAllFood" options={({ route }) => ({ title: route.params.title })} {..._children(EditTitleAllFood)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditChildFood" options={({ route }) => ({ title: route.params.title })} {..._children(EditChildFood)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateTitleAllFood" options={({ route }) => ({ title: 'ساخت دسته ی اغذیه' })} {..._children(CreateTitleAllFood)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateChildFood" options={({ route }) => ({ title: `ساخت دسته برای ${route.params.title}` })} {..._children(CreateChildFood)}  />
            <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {..._children(AddAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'اضافه کردن ادمین' }} {..._children(Address)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {..._children(Notifee)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeAdmin" options={{ title: 'تعویض ادمین' }} {..._children(ChangeAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {..._children(DeleteAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAllAddress" options={{title: 'حذف آدرس ها', headerShown: true, header: (props) =><Row fd={'row'} style={[Platform.OS === 'ios' && { marginTop: 40 }, { width: '100%', justifyContent: 'center', backgroundColor: '#fff', marginBottom: 8 }]} ><Input border={[1, '#888']} h={42} m={'auto'} mv={10} w={'85%'} alignSelf='center' value={p.textSearch} onChangeText={(text) => { p.settextSearch(text); const fd = p._address.filter(f => f.fullname.includes(text) || f.phone == text); p.setallAddress(fd) }} p="جستجو" icon={'search'} />{<Micon name='arrow-back' onPress={() => { props.navigation.navigate('AdminTitleAllFood') }} style={{ height: 42, width: 35, marginTop: 17, left: -5, textAlign: 'center' }} size={27} />}</Row>}} {..._children(DeleteAllAddress)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ListAvailable" options={{ title: 'لیست غذا ناموجود' }} {..._children(ListAvailable)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'ارسال نظرات و پیشنهادات' }} {..._children(GetProposal)} />
          </Tab.Group>
          <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
        </Tab.Navigator >
      </>
  )
}

 propTypes(Home)
 propTypes(ChildFood)
 propTypes(SingleFood)
 propTypes(Register)
 propTypes(Login)
 propTypes(ForgetPass)
 propTypes(ResetPass)
 propTypes(Profile)
 propTypes(FinallFoodPayment)
 propTypes(Logout)
 propTypes(Payment)
 propTypes(LastPayment)
 propTypes(Location)
 propTypes(SendProposal)
 propTypes(ListAvailable)
 propTypes(AdminTitleAllFood)
 propTypes(AdminChildTable)
 propTypes(EditTitleAllFood)
 propTypes(EditChildFood)
 propTypes(CreateTitleAllFood)
 propTypes(CreateChildFood)
 propTypes(AddAdmin)
 propTypes(Notifee)
 propTypes(ChangeAdmin)
 propTypes(Address)
 propTypes(DeleteAdmin)
 propTypes(DeleteAllAddress)
 propTypes(GetProposal)

const linking = {
  prefixes: ['localhost:19006://', 'http://localhost:19006'],
  config: {
    screens: {
      Home: '/Home',
      ChildFood: 'ChildFood/:id',
      SingleFood: 'SingleFood/:id',
      Register: 'Register',
      Login: 'Login',
      ForgetPass: 'ForgetPass',
      ResetPass: 'ResetPass',
      Profile: 'Profile',
      FinallFoodPayment: 'FinallFoodPayment',
      Logout: 'Logout',
      Payment: 'Payment',
      LastPayment:'LastPayment',
      Location: 'Location',
      SendProposal:'SendProposal',
      ListAvailable: 'ListAvailable',
      AdminTitleAllFood: 'AdminTitleAllFood',
      AdminChildTable: 'AdminChildTable/:id',
      EditTitleAllFood: 'EditTitleAllFood/:id',
      EditChildFood: 'EditChildFood/:id',
      CreateTitleAllFood: 'CreateTitleAllFood/:id',
      CreateChildFood: 'CreateChildFood/:id',
      AddAdmin: 'AddAdmin',
      Notifee: 'Notifee',
      ChangeAdmin: 'ChangeAdmin',
      Address: 'Address',
      DeleteAdmin: 'DeleteAdmin',
      DeleteAllAddress: 'DeleteAllAddress',
      GetProposal:'GetProposal',
      NotFound: '*'
    },
  },
};



let App
if (Platform.OS !== 'web') {
  App = () => {
    return (
      <NavigationContainer>
        <Food />
      </NavigationContainer>
    )
  }
}
else {
  App = () => {
    return (
      <NavigationContainer linking={Platform.OS === 'web' ? linking : null} >
        <View flex={1} style={{ minHeight: Platform.OS === 'web' ? '100vh' : null }} dir='rtl' >
          <Food />
        </View>
      </NavigationContainer>
    )
  }
}

export default App;



