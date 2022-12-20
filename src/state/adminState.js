
export function adminState(p) {

  this.getAlluserAdmin = async () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await p.getAlluserAdmin()
        p.setadmin(data)
      })()
    }, [])
  }


  this.addAdmin = async () => {
    p.setshowActivity(true)
    await p.useradmin({ phone: p.phone });
    p.setphone('')
    p.navigation.goBack()
  }


  this.deleteAdmin = async () => {
    p.setshowActivity(true)
    await p.deleteAdmin({ phone: p.phone });
    p.setphone('')
    p.navigation.goBack()
  }


  this.changeAdmin = async () => {
    p.setshowActivity(true)
    await p.changeAdmin({ adminPhone: p.phone, newAdminPhone: p.input });
    p.setnavigateProfile(false)
    p.setnavigateUser(false)
    p.settokenValue({})
    p.settoken(false)
    await p.localStorage.removeItem("token");
    await p.localStorage.removeItem("exp");
    for (let i of p.foods) {
      const { data } = await p.getallchildfood(i._id)
      for (let item of data.child) {
        p.map.delete(item._id)
        p.map.delete(item.title)
      }
    }
    p.map.delete('sum')
    p.map.delete('allprice')
    p.setallprice(0)

    p.setphone('')

    p.navigation.navigate("Home")
  }



  this.totalAllAddress = () => {
    let total = []
    p.useEffect(() => {
      p.allAddress.forEach((address) => {
        total.push(address.price)
      })
      const su = total.length && total.reduce((total, number) => total + number)
      p.settotalPrices(su);

      p.localStorage.getItem('totalOldPrice').then((res) => {
        res && p.setoldPrice(JSON.parse(res))
      })
    }, [p.allAddress])
  }



  this.getAllAddress = async () => {
    p.useEffect(() => {
        p.getAllAddress().then(async ({ data }) => {
            p.setallAddress(data)
            p.set_address(data)
            await p.localStorage.setItem('address', JSON.stringify(data))
        })
    }, [p.change])


    p.useMemo(() => {
      setInterval(() => {
        p.getAllAddress().then(async ({ data }) => {
          let loc = JSON.parse(await p.localStorage.getItem('address'))
          let address = loc ? loc : []
          if (address.length !== data.length) {
            p.setallAddress(data)
            p.set_address(data)
            await p.localStorage.setItem('address', JSON.stringify(data))
          }
        })
      }, 10000);
    }, [])


    p.useEffect(() => {
      for (let i in p.allAddress) {
        if (i == p.allAddress.length - 1)
          p.setfromMomemt(p.moment(p.allAddress[i]?.createdAt).format('jM/jD'))

      }
    }, [p.allAddress])

  }


  this.deleteAddress = (_id) => {
    p.Alert.alert(
      "مشتری حذف شود ؟",
      "",
      [
        { text: "Cancel", onPress: () => { } },
        { text: "OK", onPress: async () => { 
          p.setshowActivity(true)
          await p.deleteAddress(_id); p.setchange(!p.change); } }
      ])
  }


  this.deleteAllAddress = () => {
    p.Alert.alert(
      "آیا از حذف تمام مشتریان مطمئنید؟",
      "",
      [
        { text: "Cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            p.Alert.alert(
              "",
              "بعد از حذف دیگر قادر به برگرداندن نخواهید بود!!",
              [
                { text: "Cancel", onPress: () => { } },
                {
                  text: "yes", onPress: async () => {
                    p.setshowActivity(true)
                    await p.deleteAllAddress(); await p.localStorage.setItem('totalOldPrice', JSON.stringify(p.fromMomemt + '=' + p.totalPrices)); p.setchange(!p.change); p.setshowBtn(true); p.setfromMomemt(null)
                  }
                }])
          }
        }])
  }
  // address






  this.getEdit = async () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await p.getsinglechildfood(p.route.params.id, p.route.params.id2)
        p.settitle(data.child.title)
        p.setprice(data.child.price.toString())
        p.setImageUrl(data.child.imageUrl)
        p.setInfo(data.child.info)
      })()

      return () => {
        p.settitle('')
        p.setprice('')
        p.setImageUrl('')
        p.setInfo('')
      }
    }, [])
  }


  // createfood
  this.createChild = async () => {
    p.setshowActivity(true)
    await p.createchildfood(p.route.params.id, { title: p.title, price: p.price, imageUrl: p.imageUrl, info: p.info })
    let current = [...p.current, { title: p.title, price: p.price, imageUrl: p.imageUrl, info: p.info, available: true }]
    p.setcurrent(current)
    p.setchangeChildfood(!p.changeChildfood)
    p.settitle('')
    p.setprice('')
    p.setInfo('')
    p.setImageUrl('')
    p.navigation.goBack()
  }
  // createfood



  // createpartfood
  this.createTitleFood = async () => {
    p.setshowActivity(true)
    await p.createfood({ title: p.title, imageUrl: p.imageUrl })
    p.setchangeTitle(!p.changeTitle)
    p.settitle('')
    p.setImageUrl('')
    p.navigation.goBack()
  }
  // createpartfood


  // DeleteFood
  this.deleteChildFoodAction = async (id, id2) => {
    p.setshowActivity(true)
    await p.deletechildfood(id, id2)
    let current = [...p.current]
    let filter = current.filter(c => c._id !== id2)
    p.setcurrent(filter)
    p.setchangeChildfood(!p.changeChildfood)
  }
  // DeleteFood
  this.deleteFoodAction = async (id) => {
    p.setshowActivity(true)
    await p.deletefood(id)
    p.setchangeTitle(!p.changeTitle)
  }
  // DeleteFoods



  this.editeFoodAction = async () => {
    p.setshowActivity(true)
    await p.editchildfood(p.route.params.id, p.route.params.id2, { title: p.title, price: p.price, imageUrl: p.imageUrl, info: p.info })
    let current = p.current.find(c => c._id === p.route.params.id2)
    if (current) {
      current.title = p.title
      current.price = p.price
      current.imageUrl = p.imageUrl
      current.info = p.info
      p.setchangeChildfood(!p.changeChildfood)
    }
    p.navigation.goBack()
  }

  this.unmountEditFood = async () => {
    p.useEffect(() => {
      let foodMap = p.foodMap.get(p.route.params.id2);
      return () => p.foodMap.set(p.route.params.id, foodMap)
    }, [])
  }



  this.editeFoods = async () => {
    p.setshowActivity(true)
    await p.editfood(p.route.params.id, { title: p.title, imageUrl: p.imageUrl })
    p.setchangeTitle(!p.changeTitle)
    p.navigation.goBack()
  }
  //EditeFoods



  this.available = async (available, id, id2) => {
    p.setshowActivity(true)
    await p.unAvailable({ available }, id, id2)
    let current = [...p.current]
    let find = current.findIndex(c => c._id === p.id2)
    if (current) current[find].available = available
    p.setcurrent(current)
    p.setchangeChildfood(!p.changeChildfood)
  }


  this.listAvailable = async () => {
    p.useEffect(() => {
      p.listAvailable().then(({ data }) => {
        p.setlist(data)
      })
    }, [p.showModalAvailabe, p.id, p._id])
  }



  this.sendAvailable = async () => {
    p.setshowActivity(true)
    await p.unAvailable({ available: true }, p.id, p._id)
    p.setshowModalAvailabe(!p.showModalAvailabe)
  }




  this.notifee = async () => {
    p.setshowActivity(true)
    await p.createNotification({ title: p.title, message: p.info })
    p.navigation.goBack()
  }


  this.getProposal = async () => {
    p.useEffect(()=>{
      (async()=>{
        let {data} = await p.getProposal()
        p.setproposal(data)
      })()
    },[p.changeProposal])
}


this.deleteMultiProposal = async () => {
  p.setshowActivity(true)
  await p.deleteMultiProposal(JSON.stringify(p.proposalId))
  p.setchangeProposal(!p.changeProposal)
}

}