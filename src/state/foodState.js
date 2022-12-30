import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { Platform, PermissionsAndroid } from 'react-native';
import backgroundTimer from '../utils/backgroundTimer'
import Geolocation from 'react-native-geolocation-service';
import GetLocation from 'react-native-get-location';


const beforeUnloadListener = (event) => {
  event.preventDefault();
  if (Platform.OS === 'web') {
    return event.returnValue = "آیا سفارشتان را به پایان رساندین و خارج میشوید؟";
  }
};

export function foodState(p) {


  this.getImageProfile = () => {
    p.useEffect(() => {
      (async () => {
        p.getProfile().then(({ data }) => {
          data?.uri && p.setimageProfile(data.uri)
        })
      })()
    }, [p.change])
  }


  this.setorientation = () => {
    p.Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      width < height ? p.setorientation("PORTRAIT") : p.setorientation("LANDSCAPE")
      p.setwidth(width); p.setheight(height)
    })
  }



  this.getTitileFoods=()=>{
    p.useEffect(() => {
      (async () => {
        let { data } = await p.getfoods()
        p.setfoods(data)
      })()
    }, [])
  }



  // EditFood
  this.getSingleTitleFoods = async () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await p.getSingleTitleFoods(p.route.params.id)
        p.settitle(data.title)
        p.setImageUrl(data.imageUrl)
      })()
      return () => {
        p.settitle('')
        p.setImageUrl('')
      }
    }, [])
  }


  this.setPagination = () => {
    p.useEffect(() => {
      p.setcurrentPage(1)
      p.setpage(1);
      p.setcurrent([])
      // p.settextSearch('')
    }, [])
  }

  this.getTitleFood = () => {
    p.useEffect(() => {
      (async () => {
        let { data } = await p.getfoods()
        p.setfoods(data)
      })()
    }, [])
  }


  this.getChildFood = async () => {
    p.useEffect(() => {
      (async () => {
        var d = []
        let { data } = await p.getallchildfood()
        let w = data.child.filter((ch) => ch.refId == p.route.params.id)
        for (let k in w) {
          let l = p.map.get(w[k]._id)

          if (l !== undefined) {
            let f = JSON.parse(l)
            w[k].num = f.num
            w[k].total = f.total
            d.push(w[k])
          } else {
            d.push(w[k])
          }
        }
        p.foodMap.set(p.route.params.id, d)
        p.setfood2(d)
        p.setcurrentComment([])
      })()
      // return () => p.foodMap.set(p.route.params.id, p.food2)
    }, [p.changeChildfood])
  }



  this.sercher = (textSearch) => {
    const f = []
    let fd1 = p.food2.filter((f) => f.title.includes(textSearch))
    f.push(...fd1)
    let fd2 = p.food2.filter((f) => (f.title.includes(textSearch[0]) && f.title.includes(textSearch[1])) || (f.title.includes(textSearch[1]) && f.title.includes(textSearch[2])) || (f.title.includes(textSearch[2]) && f.title.includes(textSearch[3])) || (f.title.includes(textSearch[3]) && f.title.includes(textSearch[4])) || (f.title.includes(textSearch[4]) && f.title.includes(textSearch[5])) || (f.title.includes(textSearch[5]) && f.title.includes(textSearch[6])) || (f.title.includes(textSearch[6]) && f.title.includes(textSearch[7])) || (f.title.includes(textSearch[7]) && f.title.includes(textSearch[8])) || (f.title.includes(textSearch[8]) && f.title.includes(textSearch[9])) || (f.title.includes(textSearch[9]) && f.title.includes(textSearch[10])) || (f.title.includes(textSearch[10]) && f.title.includes(textSearch[11])))
    for (let i in fd1) {
      for (let n in fd2) {
        if (fd1[i]._id !== fd2[n]._id) {
          let find = f.find((f) => f._id === fd2[n]._id)
          if (!find) { textSearch[1] && f.push(fd2[n]) }
        }
      }
    }
    for (let n in fd2) {
      let find = f.find((f) => f._id === fd2[n]._id)
      if (!find) { textSearch[1] && f.push(fd2[n]) }
    }
    p.foodMap.set(p.route.params.id, f)
    if (f) {
      const currentPage = Math.max(0, Math.min(1, f.length))
      const offset = (currentPage - 1) * p.pageLimit
      const currentCountries = f.slice(offset, offset + p.pageLimit)
      p.setcurrent(currentCountries)
      p.setcurrentPage(currentPage)
      p.settextSearch('')
    }
  }


  this.foodAsc = (setpage) => {
    let foodMap = p.foodMap.get(p.route.params.id)
    if (foodMap) {
      p.foodMap.set(p.route.params.id, foodMap.sort((a, b) => a.price - b.price))
      p.setass(!p.ass)
      setpage(1)
    }
  }



  this.foodDesc = (setpage) => {
    let foodMap = p.foodMap.get(p.route.params.id)
    p.foodMap.set(p.route.params.id, foodMap.sort((a, b) => b['price'] - a['price']))
    p.setass(!p.ass)
    setpage(1)
  }



  this.allPrice = async () => {
    p.useEffect(() => {
      (async () => {
        let all = []
        for (let i of p.allfood) { all.push(i.total) }
        if (all.length) {
          const su = all.reduce((total, number) => total + number)
          p.setallprice(su < 0 ? 0 : su)
          p.map.set('allprice', JSON.stringify(su))

          if (Platform.OS === 'web' && !su) {
            removeEventListener("beforeunload", beforeUnloadListener, { capture: true });
          }
        }
      })()
    }, [p.show1])
  }




  this.plustNum = async (inde, item, setpage, page) => {
    Platform.OS === 'web' && addEventListener("beforeunload", beforeUnloadListener, { capture: true });
    if (p.route.name == 'ChildFood') {
      let h = [...p.foodMap.get(p.route.params.id)]
      let index = p.foodMap.get(p.route.params.id).findIndex(f => f._id == item._id)
      h[index].num = h[index].num + 1
      h[index].total = item.price * h[index].num
      let allfood = [...p.allfood]
      let fnd = allfood.findIndex((f) => f._id === item._id)
      let allfoodTitle=[]
      allfood.map((food)=>{if(food.num !== 0)allfoodTitle.push(food.title)})


      let find2 = p.allFoodTitle.find((f) => f === item.title)
      
      if(!find2)
      p.setallFoodTitle((food)=>food.concat(item.title))
      
      console.log(p.allFoodTitle);



      if (!allfood[fnd]) {
        allfood.push(h[index])
        p.setallfood(allfood)
      }
      else {
        allfood[fnd] = h[index]
        p.setallfood(allfood)
      }
      p.map.set(item._id + '1', item._id)
      p.map.set(item._id, JSON.stringify(h[index]))
      let tit = p.map.get(item._id + '1')
      let gg = p.totalTitle.find((t) => t == item._id)
      if (tit && !gg) p.settotalTitle((t) => { return t.concat(tit) })
      p.foodMap.set(p.route.params.id, h)

      setpage(page)
      const offset = (page - 1) * p.pageLimit
      const currentCountries = h.slice(offset, offset + p.pageLimit)
      p.setcurrent(currentCountries)
      setpage(page)

      p.setshow1(!p.show1)
    }
    if (p.route.name == 'FinallFoodPayment') {
      let h = [...p.allfood]
      let index = h.findIndex(f => f._id == item._id)
      h[index].num = h[index].num + 1
      h[index].total = item.price * h[index].num
      p.map.set(item._id, JSON.stringify(h[index]))

      let f = p.foodMap.get(h[index].refId)
      let fIndex = f.findIndex((f) => (f._id === h[index]._id))
      f[fIndex].num = h[index].num
      p.foodMap.set(h[index].refId, f)

      p.setshow1(!p.show1)
    }

  }




  this.minusNum = async (inde, item, setpage, page) => {
    if (p.route.name == 'ChildFood') {
      let h = [...p.foodMap.get(p.route.params.id)]
      let index = p.foodMap.get(p.route.params.id).findIndex(f => f._id == item._id)
      h[index].num = h[index].num - 1
      h[index].total = item.price * h[index].num
      let allfood = [...p.allfood]
      let fnd = allfood.findIndex((f) => f._id === item._id)
      if (!allfood[fnd]) {
        allfood.push(h[index])
        p.setallfood(allfood)
      }
      else {
        allfood[fnd] = h[index]
        p.setallfood(allfood)
      }
      p.map.set(item._id + '1', item._id)

      p.map.set(item._id, JSON.stringify(h[index]))
      if (h[index].num == 0) {
        let gg = p.totalTitle.filter((t) => t != item._id)
        p.settotalTitle(gg)
        p.map.delete(item._id + '1')
        let titleFood = p.allFoodTitle.filter((title)=>title !== item.title )
        p.setallFoodTitle(titleFood)
      }
      p.foodMap.set(p.route.params.id, h)

      setpage(page)
      const offset = (page - 1) * p.pageLimit
      const currentCountries = h.slice(offset, offset + p.pageLimit)
      p.setcurrent(currentCountries)
      setpage(page)


      p.setshow1(!p.show1)
    }
    if (p.route.name == 'FinallFoodPayment') {
      let h = [...p.allfood]
      let index = h.findIndex(f => f._id == item._id)
      h[index].num = h[index].num - 1
      h[index].total = item.price * h[index].num
      p.map.set(item._id, JSON.stringify(h[index]))

      let f = p.foodMap.get(h[index].refId)
      let fIndex = f.findIndex((f) => (f._id === h[index]._id))
      f[fIndex].num = h[index].num
      p.foodMap.set(h[index].refId, f)

      p.setshow1(!p.show1)
      if (h[index].num == 0) {
        let gg = p.totalTitle.filter((t) => t != item._id)
        p.settotalTitle(gg)
        p.map.delete(item._id + '1')
        let titleFood = p.allFoodTitle.filter((title)=>title !== item.title )
        p.setallFoodTitle(titleFood)
      }
    }
  }



  this.deleteStorage = () => {
    p.Alert.alert(
      "از حذف سفارش مطمئنید؟",
      "",
      [
        { text: "Cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
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
            p.setallFoodTitle([])
            p.settotalTitle([])
            p.setshow1(!p.show1)
            if (Platform.OS === 'web') removeEventListener("beforeunload", beforeUnloadListener, { capture: true });
            // p.setfoodMap(new Map())
            // p.setmap(new Map())
            // p.setcurrent([])
            p.setchangeChildfood(!p.changeChildfood)

          }
        },
      ]
    )
  }



  this.getsinglefood = async () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await p.getsinglechildfood(p.route.params.id, p.route.params.id2)
        p.setsinglefood(data.child)
        p.setpermission(data.permission)
      })()
      return () => (
        p.setsinglefood({}),
        p.setpermission(false),
        p.setallcomment([])
      )
    }, [])
  }




  this.header = () => {
    p.useEffect(() => {
      p.navigation.setOptions({ headerShown: (p.showForm2 || p.showForm) ? false : true, headerStyle: { backgroundColor: '#f82' } })
    }, [p.showForm2, p.showForm])

  }



  this.getCommentSingle = async () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await p.getcommentchildfood(p.route.params.id, p.route.params.id2)
        p.setallcomment(data.comment)
      })()
    }, [p.showForm, p.showForm2, p.changeComment, p.ass2])

    p.useEffect(() => {
      return () => {
        p.setshowForm(false)
        p.setshowForm2(false)
        p.setallcomment([])
        p.setsendMessage(true)
        p.setcurrentComment([])
      }
    }, [])
  }

  this.findCmment = async () => {
    p.useEffect(() => {
      p.allcomment.forEach(item => {
        if (item.starId === p.tokenValue.userId) { p.setsendMessage(false) }
      });
    }, [p.allcomment])
  }



  this.sendComment = async () => {
    p.setshowActivity(true)
    await p.createcommentchildfood(p.route.params.id, p.route.params.id2, {
      starId: p.tokenValue.userId,
      fullname: p.tokenValue.fullname,
      imageUrl: p.imageProfile,
      message: p.message,
      allstar: Number(p.allstar),
      id: p.singlefood._id
    })
    p.setstar1(true),
      p.setstar2(true),
      p.setstar3(true),
      p.setstar4(true),
      p.setstar5(true),
      p.setfullname(''),
      p.setemail(''),
      p.setmessage(''),
      p.setshowForm(false)
    p.setass2(false);
    setTimeout(() => { p.setass2(true); }, 10)
  }


  this.unmountComment = () => {
    p.useEffect(() => {
      return () => {
        p.setstar1(true)
        p.setstar2(true)
        p.setstar3(true)
        p.setstar4(true)
        p.setstar5(true)
        p.setmessage('')
      }
    }, [])
  }


  this.editComment = async id3 => {
    p.setshowActivity(true)
    await p.editcomment(p.route.params.id, p.route.params.id2, id3, { message: p.message, allstar: p.allstar })
    p.setstar1(true)
    p.setstar2(true)
    p.setstar3(true)
    p.setstar4(true)
    p.setstar5(true)
    p.setemail('')
    p.setmessage('')
    p.setshowForm(false)
    p.setass2(false);
    setTimeout(() => { p.setass2(true); }, 10)
  }



  this.deleteComment = async id3 => {
    p.Alert.alert(
      "از حذف کامنت مطمئنید؟",
      "",
      [
        { text: "Cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            p.setshowActivity(true)
            await p.deletecomment(p.route.params.id, p.route.params.id2, id3, p.tokenValue.userId)

            p.setcurrentComment(cmnt => cmnt.filter((c) => (c._id !== id3)))

            p.setsendMessage(true)
          }
        }
      ]
    );
  }



  this.getEditComment = (id3) => {
    p.useEffect(() => {
      (async () => {
          const { data } = await p.getcommentsinglefood(p.route.params.id, p.route.params.id2, id3)
          p.setmessage(data.comment.message)
          p.setallstar(data.comment.allstar)
          if (data.comment.allstar == 1) p.setstar1(true)
          if (data.comment.allstar == 2) p.setstar1(true), p.setstar2(true)
          if (data.comment.allstar == 3) p.setstar1(true), p.setstar2(true), p.setstar3(true)
          if (data.comment.allstar == 4) p.setstar1(true), p.setstar2(true), p.setstar3(true), p.setstar4(true)
          if (data.comment.allstar == 5) p.setstar1(true), p.setstar2(true), p.setstar3(true), p.setstar4(true), p.setstar5(true)
      })()

    }, [])
  }



  this.pressIconEdit = (id) => {
    p.setshowForm(true)
    p.setid3(id ? id : '')
    p.setstar1(false)
    p.setstar2(false)
    p.setstar3(false)
    p.setstar4(false)
    p.setstar5(false)
  }



  this.backHandler = () => {
    if (Platform.OS === 'android') {
      p.useEffect(() => {
        let current = 0
        p.BackHandler.addEventListener("hardwareBackPress", () => {
          if (p.route.name === 'Home' && p.navigation?.getState()?.index === 0) {
            current += 1
            if (current === 2) { p.BackHandler.exitApp(); return true }
            p.ToastAndroid.show("برای خروج دوبار لمس کنید", p.ToastAndroid.SHORT)
            setTimeout(() => {
              current = 0
            }, 1000);
            return true
          }
        })
      }, [])
    }
    else return null
    return () => Platform.OS === 'android' && p.BackHandler.removeEventListener('hardwareBackPress')
  }

  this.removeReload = () => {
    if (Platform.OS === 'web')
      removeEventListener("beforeunload", beforeUnloadListener, { capture: true });
  }


}




//home
export const home = (p) => {

  const navigation = useNavigation()
  p.useEffect(() => {
    var toastOK = () => { p.toast.success('موفق آمیز', '✅', 4000) }
    var toast500 = () => { p.toast.error('خطا', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = () => { p.toast.error('خطا', 'اصلاح کنید و دوباره امتحان کنید'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast399 = () => { p.toast.error('خطا', 'کد وارد شده اشتباه هست'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast398 = () => { p.toast.error('خطا', 'شما قبلا ثبت نام کردید'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast397 = () => { p.toast.error('خطا', 'شما قبلا ثبت نام نکرده این و یا مشخصاتتان را اشتباه وارد کردین'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast395 = () => { p.toast.error('خطا', 'شما هنوز انتخابی نکردین', 3000); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }

    Axios.interceptors.response.use(function (response) {
      if (response.config.method !== 'get' &&
        navigation.getCurrentRoute()?.name !== 'Payment' && navigation.getCurrentRoute()?.name !== 'Home' && navigation.getCurrentRoute()?.name !== 'FinallFoodPayment' && navigation.getCurrentRoute()?.name !== 'ChildFood' && navigation.getCurrentRoute()?.name !== 'Location'  && (response.status === 200 || response.status === 201)) toastOK()
        p.setshowActivity(false)
        return response
    }, function (error) {
      if (error?.response?.status) {
        if (error.response.status > 400 && error.response.status <= 500) { toast500() };
        if (error.response.status === 400) { toast400() };
        if (error.response.status === 399) { toast399() };
        if (error.response.status === 398) { toast398() };
        if (error.response.status === 397) { toast397() };
        if (error.response.status === 395) { toast395() };
        p.setshowActivity(false)
      } return Promise.reject(error);
    });

  }, [])



  p.Dimensions.addEventListener('change', ({ window: { width, height } }) => {
    width < height ? p.setorientation("PORTRAIT") : p.setorientation("LANDSCAPE")
    p.setwidth(width); p.setheight(height)
  })


  p.useEffect(() => {
    (async () => {
      p.localStorage.getItem("token").then((token) => {
        if (token) {
          const user = p.jwt_decode(token)
          p.settokenValue(user)
        }
      })
    })()
  }, [])


  p.useEffect(() => {
    (async () => {
      let { data } = await p.getfoods()
      p.setfoods(data)
    })()
  }, [p.changeTitle])




  p.useMemo(() => {
    (async () => {
      let newNotification = await p.localStorage.getItem('notification')
      const { data } = await p.notification()
      if (data)
        if (data.message && newNotification !== data.message) {
          p.create(data.title, data.message, require('../assets/images/logo.jpg'))
          await p.localStorage.setItem('notification', data.message)
        }
    })();

    Platform.OS === 'web' ?
      backgroundTimer(async () => {
        (async () => {
          let newNotification = await p.localStorage.getItem('notification')
          const { data } = await p.notification()
          if (data)
            if (data.message && newNotification !== data.message) {
              p.create(data.title, data.message, require('../assets/images/logo.jpg'))
              await p.localStorage.setItem('notification', data.message)
            }
        })();
      }, 15000)

      :
      backgroundTimer.runBackgroundTimer(async () => {
        (async () => {
          let newNotification = await p.localStorage.getItem('notification')
          const { data } = await p.notification()
          if (data)
            if (data.message && newNotification !== data.message) {
              p.create(data.title, data.message, require('../assets/images/logo.jpg'))
              await p.localStorage.setItem('notification', data.message)
            }
        })();
      }, 15000);

  }, [])




  p.useMemo(() => {
    setTimeout(() => {
      p.setSplash(false)
    }, 1000)
  }, [])



  p.useEffect(() => {
    (async () => {
      setTimeout(() => {
        p.getProfile().then(({ data }) => {
          data?.uri && p.setimageProfile(data.uri)
        })
      }, 500)
    })()
  }, [])



  p.useEffect(() => {
  if (Platform.OS === 'web' && p.lastPayment?.enablePayment === 1) {
    removeEventListener("beforeunload", beforeUnloadListener, { capture: true });
  }
}, [p.lastPayment])



  p.useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '',
          message: '',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      ).then(() => {
        Geolocation.getCurrentPosition(
          ({ coords }) => {
            p.setregion({ lat: coords.latitude, lng: coords.longitude, })
            p.setlocationPermission(true)
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
       })
    }
    else if (Platform.OS === 'ios') {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          p.setregion({ lat: coords.latitude, lng: coords.longitude, })
          p.setlocationPermission(true)
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })

    }
else{
  if(navigator?.geolocation?.getCurrentPosition) 
  navigator.geolocation.getCurrentPosition(
    (position) =>{p.setlatlng({lat:position.coords.latitude,lng:position.coords.longitude})},
    (error)=>{console.log(error)},
    {maximumAge:600000, timeout:5000, enableHighAccuracy: true}

); 
//   if(navigator?.geolocation?.getCurrentPosition) 
//   navigator.geolocation.getCurrentPosition((position) =>{
//     p.setlatlng({lat:position.coords.latitude,lng:position.coords.longitude})},
//     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//  )
}
  }, [])


}
//home


