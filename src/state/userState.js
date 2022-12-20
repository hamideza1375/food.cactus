import axios from "axios"
import Geolocation from 'react-native-geolocation-service';
import { Platform } from "react-native"
import { imagePicker } from "../utils/imagePicer";


export function userState(p) {

  this.sendLoginAction = async () => {
    p.setshowActivity(true)
      const { data } = await p.loginUser({ email: p.email, password: p.password, phone: p.phone, captcha: p.captcha, remember: p.remember }, p.navigation);
      await p.localStorage.setItem("token", data.token);
      await p.localStorage.setItem("exp", data.exp);
      const user = p.jwt_decode(data.token)
      p.settokenValue(user)
      p.settimeChange(5)
      if(data.token) axios.defaults.headers.common["Authorization"] = data.token
      p.setchangeLoginUser(!p.changeLoginUser)
      p.route.params?.name !== 'ChildFood' ?
      p.navigation.replace("Home") :
      p.route.params.price != 0 ?
      p.navigation.replace("FinallFoodPayment") :
      p.navigation.replace("Home")
  }
  

  this.mountLogin = () => {
    p.useEffect(() => (() => {
      p.setfullname('');
      p.setemail('');
      p.setphone('');
      p.setPassword('')
    }), [])
  }



  this.registerSendAction = async () => {
    p.setshowActivity(true)
    await p.registerUser({ phone: p.phone });
    p.setchangeRegister(!p.changeRegister)
  }


  this.registerSendCode = async () => {
    p.setshowActivity(true)
    await p.verifycodeRegister({ code: p.code, fullname: p.fullname, email: p.email, phone: p.phone, password: p.password })
    p.navigation.navigate("Login")
    p.setchangeRegister(!p.changeRegister)
  }





  // Home
  this._token = async () => {
    if (p.navigation?.getState()?.index === 0 && p.route?.name === 'Home') {
      const exp = await p.localStorage.getItem("exp");
      if (exp && Number(exp) > Date.now() / 1000) return p.settoken(true)
      if (!exp) return p.settoken(false)
      if (exp && Number(exp) < Date.now() / 1000) {
        await p.localStorage.removeItem("token");
        await p.localStorage.removeItem("exp");
        return p.settoken(false)
      }
    }
  }
  // Home


  // profile
  this._tokenValue = () => {
    p.useEffect(() => {
      p.localStorage.getItem("token").then((token) => {
        if (token) {
          const user = p.jwt_decode(token)
          p.settokenValue(user)
        }
      })
    }, [])
  }


  this.imagePicker = async () => {
    imagePicker().then(async(uri)=>{
      p.setshowActivity(true)
      await p.sendProfile({ uri });
      p.setchange(!p.change)
    })
  }


//!
  this.profile = async () => {
    p.useEffect(() => {
      (async () => {
        let room = ['room5', 'room6']
        for (let i of room) {
          let loc = await p.localStorage.getItem(i)
          if (loc) { p.allRoom.set(i, JSON.parse(loc)); p.msgLength.set(i, JSON.parse(loc)); }
        }
      })()

      p.localStorage.getItem("token").then((token) => {
        const user = p.jwt_decode(token)
        token && p.settokenValue(user)
      })

    }, [])
//!


    p.useMemo(() => {
      try {
        if (Platform.OS !== 'ios') {
          p.Keyboard.removeAllListeners('keyboardDidShow')
          p.Keyboard.removeAllListeners('keyboardDidHide')
        }
      }
      catch (error) { }
    }, [])


  }

  // profile



  // forgetpassword
  this.forgetAction = async () => {
    p.setshowActivity(true)
    await p.forgetpassword({ email: p.email })
  }

  this.setreplaceInput = async () => {
    p.useEffect(() => {
      return () => {
        p.setreplaceInput(false)
      }
    }, [])
  }
  // forgetpassword


  //sms
  this.smsAction = async () => {
    p.setshowActivity(true)
    await p.sendcode({ phone: p.myPhone })
    p.setreplaceInput(true)
  }

  this.codeAction = async () => {
    p.setshowActivity(true)
    const { data } = await p.verifycode({ code: p.myCode })
    p.navigation.navigate('ResetPass', { id: data })
  }

  //sms




  // location


  this.geoCodeAction = async () => {
    let { data } = await p.geocode({ loc: `سبزوار ${p.search1}` })
    let orgin = {
      latitude: data[0].latitude,
      longitude: data[0].longitude,
      latitudeDelta: 0.008,
      longitudeDelta: 0.008
    }
    // if(data[0] && data[0].latitude && data[0].zipcode === "96139-44591" || data[0].city === "دهستان قصبه شرقی" || data[0].city === "سبزوار" || data[0].city === "شهر سبزوار"){
    //  if(data[0].longitude > 57.65055116587766 && data[0].streetName !== "سبزوار - اسفراین" ) 
    // }
    if (data[0] && data[0].longitude &&
      data[0].longitude > 57.645 &&
      data[0].longitude < 57.711 &&
      data[0].latitude > 36.191 &&
      data[0].latitude < 36.239) p.setmarkers(orgin);
    p.setallItemLocation(data[0])

  }


  this.geoCodeAction2 = async (e) => {
    let orgin = {
      ...e.nativeEvent.coordinate,
    }
    p.setmarkers(orgin)
  }


  this.reversAction = async () => {
    p.useEffect(() => {
      (async () => {
        let { data } = await p.reverse(p.markers)
        let formattedAddress = data[0].formattedAddress
        let streetName = data[0].streetName

        p.setrevers({
          formattedAddress, streetName,
          origin: {
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          }
        })
        p.setallItemLocation(data[0])
      })()
    }, [p.markers])



    p.useEffect(() => {
      if (p.allItemLocation && p.allItemLocation.longitude) {
        if (
          p.allItemLocation.longitude < 57.645 ||
          p.allItemLocation.longitude > 57.711 ||
          p.allItemLocation.latitude < 36.191 ||
          p.allItemLocation.latitude > 36.239 ||
          p.allItemLocation.streetName === "سبزوار - اسفراین"
        ) Toast('این منطقه از ارسال غذا پشتیبانی نمیکند')
      }
      if (p.route.params?.origin && p.tokenValue.isAdmin) p.setmarkers(p.route.params.origin["origin"])
    }, [p.allItemLocation])

  }



  // logout
  this.logout = async () => {
    p.useEffect(() => {
      (async () => {

        p.Alert.alert(
          "خارج میشوید؟",
          "",
          [{ text: 'no', onPress: () => { p.navigation.goBack() } },
          {
            text: 'yes', onPress: async () => {
              p.setnavigateProfile(false)
              p.setnavigateUser(false)
              p.settokenValue({})
              p.settoken(false)
              p.setimageProfile('')
              await p.localStorage.removeItem("token");
              await p.localStorage.removeItem("exp");

              for (let i of p.foods) {
                const { data } = await p.getallchildfood(i._id)
                for (let item of data.child) {
                  p.map.delete(item._id)
                  p.map.delete(item._id + '1') 
                }
              }
              p.map.delete('sum')
              p.map.delete('allprice')
              p.setallprice(0)
              p.setallfood([])
              p.settotalTitle([])
              p.setshow1(!p.show1)
              // p.setfoodMap(new Map())
              // p.setmap(new Map())
              // p.setcurrent([])
              p.navigation.navigate("Home")
            }
          }])
      })()

      return () => (
        p.setnavigateProfile(false),
        p.setnavigateUser(false)
      )
    }, []);
  }
  // logout



  // resetPass
  this.resetpassword = async () => {
    try {
      p.setshowActivity(true)
      const { status } = await p.resetpassword(p.route.params.id, { password: p.password, confirmPassword: p.confirmPassword })
      if (status === 200) p.navigation.navigate('Login')
    } catch (err) { alert('خطایی رخ داد دوباره امتحان کنید'); }
  }
  // resetPass



  this.sendProposal = async () => {
    p.setshowActivity(true)
    await p.sendProposal({ message: p.message })
    p.setmessage('')
    p.navigation.goBack()
  }



  this.getLastPayment = () => {
    p.useEffect(() => {
      (async () => {
        let { data } = await p.getLastPayment()
        p.setlastPayment(data)

        // send sefaresh = 1
        // pake lasst send change to = 0
      })()
    }, [])
  }

}

