import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react'
import { Platform, SafeAreaView, Pressable, View } from 'react-native';
import TopTab from '../Components/tabNavigation/TopTab';
import BottomTab from '../Components/tabNavigation/BottomTab';
import Drawer from '../Components/tabNavigation/Drawer';
import { Icon } from '../Components/Html';

export const Layout = (p) => {

  useFocusEffect(useCallback(() => {
    return () => {
      if (p._key === '100') { p.setnavigateProfile(p.route.name) }
      if (p._key === '120') { p.setnavigateUser(p.route.name) }
    }
  }, []))
  const drawer =  [{name:'Profile',title:'پروفایل'},{name:'LastPayment',title:'خرید آخر'}, {name:'Logout', title:'خروج از حساب کاربری'}]
  const topUser = [{name:'Register', title:'ثبت نام'}, {name:'Login',title:'ورود'}]

  const drawer2 = [
    { name: 'AdminTitleAllFood', title: 'پنل ادمین' },
    { name: 'Address', title: 'فیش سفارشات' },
    { name: 'ListAvailable', title: 'لیست غذا های ناموجود' },
    { name: 'Notifee', title: 'ارسال نوتیفیکیشن' },
    { name: 'AddAdmin', title: 'اضافه کردن پیک موتوری' },
    { name: 'GetProposal', title: 'انتقادات و پیشنهادات' },
    { name: 'DeleteAdmin', title: 'قطع کردن دسترسی پیک موتوری' },
    { name: 'ChangeAdmin', title: 'تغییر ادمین' },
    { name: 'DeleteAllAddress', title: 'حذف تمام فیش ها' },
  ]


  let bottom = (p.tokenValue.isAdmin !== 'courier') ?
    ([{ title: 'Home', icon: 'home', navigate: null }, 
    p.tokenValue.fullname ? 
    { title: (p._key == '100') ?
     p.route.name : 'Profile', icon: 'user', navigate: p.route.name ===  'Profile' || p.route.name ===  'LastPayment' || p.route.name ===  'Logout'?p.route.name: p.navigateProfile }
     :
      { title: (p._key == '120') ?
       p.route.name : 'Login', icon: 'user', navigate:p.route.name === 'Login'|| p.route.name === 'Register'?p.route.name: p.navigateUser }])
    :
    (p.tokenValue.fullname ? []
       : [{ title: 'Home', icon: 'home', navigate: null }, { title: (p._key == '120') ? p.route.name : 'Register', icon: 'user', navigate: p.navigateUser }])

  return (
    <View style={{flex:1, paddingHorizontal:Platform.OS === 'ios'? (p.width > p.height ?35:0):0}} >
    <SafeAreaView style={{backgroundColor: p.route.name === 'Profile' ? '#bbf' : '#fff'}} />
  {  p.route.name === 'Profile' | p.route.name === 'LastPayment' | p.route.name === 'Login' | p.route.name === 'Register' | p.route.name === 'Home' | p.route.name === 'AdminTitleAllFood' ?
      <View style={{flex:1,overflow:'hidden'}}>
        {
          p.route.name === 'Profile' &&(
            p.tokenValue.fullname ?
            <Drawer name={'Profile'} title={'پروفایل'} group={drawer} bgcolor="#9f9fff" style={{overflow:'hidden'}}>
              <BottomTab name={'Profile'} title={'پروفایل'} group={bottom} bgcolor="#9f9fff" color='white' activeColor='#05f' style={{overflow:'hidden',boxShadow:'1px -2px 8px #1188', borderTopWidth:1, borderColor:'red'}} >
                {p.children}
              </BottomTab>
            </Drawer>:<View onLayout={()=> Platform.OS === 'web' && p.navigation.navigate('Login')} ></View>)
            ||
            p.route.name === 'LastPayment' &&
              <Drawer name={'LastPayment'} title={'آخرین خرید'} group={drawer} style={{overflow:'hidden'}}>
                <BottomTab name={'LastPayment'} title={'آخرین خرید'} group={bottom} style={{overflow:'hidden',boxShadow:'1px -2px 8px #1188'}} >
                  {p.children}
                </BottomTab>
              </Drawer>
              ||
          p.route.name === 'Login' &&(
          !p.tokenValue.fullname ?
          <BottomTab name={'Login'} group={bottom} >
            <TopTab name={'Login'} group={topUser} >
              {p.children}
            </TopTab>
          </BottomTab>:<View onLayout={()=> Platform.OS === 'web' && p.navigation.navigate('Home')} ></View>)
          ||
          p.route.name === 'Register' &&(
          !p.tokenValue.fullname ?
          <BottomTab name={'Register'} group={bottom} >
            <TopTab name={'Register'} group={topUser} >
              {p.children}
            </TopTab>
          </BottomTab>:<View onLayout={()=> Platform.OS === 'web' && p.navigation.navigate('Home')} ></View>)
          ||
          p.route.name === 'Home' &&
          <BottomTab name={'Home'} group={bottom} bgcolor='#103' color='#fff' activeColor='#3bf' style={{boxShadow:'1px 1px 8px #a80'}} >
            {p.children}
          </BottomTab>

    ||

    p.route.name === 'AdminTitleAllFood'&&
    <Drawer name={p.route.name} title={'پنل ادمین'} group={drawer2} iconRight={{name:'home',onClick:()=>{p.navigation.navigate('Home')}}} bgcolor="#fff" style={[{ shadowRadius: 9,shadowOffset: {width:.1,height:.1}, shadowOpacity:.15 },Platform.OS === 'web' && {overflow: 'hidden'} ]}>
    {p.children}
    </Drawer>

        }
      </View>
      :

      <View flex={1} >
        {p.children}
      </View>}
      </View>
  )
}

export const header = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} >
      <Icon
      name='arrow-right'
        style={{ fontSize: 29, marginTop: -5, paddingVertical: 2.5, flexGrow: 1, color:'#222',fontWeight:'1000' }}/>

     
    </Pressable>
  );
};
// getCurrentRoute
