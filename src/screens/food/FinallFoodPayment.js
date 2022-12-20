import React from 'react'
import { PermissionsAndroid, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Loading, Button, Container, ImgBackground, P, Scroll, Span, Table } from '../../Components/Html';
import { getLocation } from '../user/getLocation/getLocation';
import s from "./Food.module.scss"

const FinallFoodPayment = (p) => {


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
      ).then(() => { })
    }
  }, [])


  const inputPrice = `${p.allprice ? p.allprice : '0'}`
  const allfood = p.allfood.filter((a) => a.num > 0)
  p._food.allPrice()
  const plus = (index, item) => p._food.plustNum(index, item)
  const minus = (index, item) => p._food.minusNum(index, item)
  const deleteAsyncStorage = () => p._food.deleteStorage()

  getLocation(p)

  return (
        <Container class={s.viewHead} >
          <Span class={s.viewOne}>
            <Span class={s.viewConseal} >
              <Button disabled={allfood.length ? false : true} bgcolor="orange" class={s.btnFinal} onPress={deleteAsyncStorage} >لغو سفارش</Button>
            </Span>
            <Span style={{ width: '96%', alignSelf: 'center', height:'100%' }} >
              {!allfood.length ?
                <Loading time={500} color={'red'} animating={allfood.length ? false : true} />
                :
                <Scroll contentContainerStyle={{paddingBottom:60}} >
                  <Table
                    color={['#f90', '#f80', 'white']}
                    fontSize={14}
                    header={['جمع', 'عنوان']}
                    body={['total', 'title']}
                    object={allfood}
                    border={[1,'#f70']}
                  />
                  <Span>
                    <P fontSize={13.5} border={[.5,'#f70']} style={{ height: 33, flex: 1,paddingVertical:5, textAlign: 'center', alignSelf: 'center', width: '99%' }} >قیمت کل: </P>
                    <P fontSize={13.5} border={[.5,'#f70']} style={{ height: 33, flex: 1,paddingVertical:5, textAlign: 'center', alignSelf: 'center', width: '99%' }} >{p.spacePrice(inputPrice, null)} ت</P>
                  </Span>
                </Scroll>
              }
            </Span>
          </Span>
          <Span class={s.viewPayment}>
            <Span class={s.viewPayTwo}>
              <Button disabled={allfood.length ? false : true} bgcolor="orange"
                class={s.btnFinal}
                onPress={() => { p.navigation.navigate("Location",{allprice:p.allprice}) }}
              >
                پرداخت
              </Button>
            </Span>
              {!allfood.length ?
                <Loading time={500} color={'red'} animating={allfood.length ? false : true} />
                :
                <Scroll style={{width:'99%',alignSelf:'center'}} containClass={s.scrollContent} >
                  {allfood.map((item, index) => (
                    <Span key={item._id} class={s.viewKey}>
                      <ImgBackground class={s.imageFinalFood} src={{ uri: `${p.localhost}/upload/food/${item.imageUrl}` }} >
                        <P p={0} class={[s.textTitleFinal]}>{item.title}</P>
                      </ImgBackground>
                      <Span w='100%' class={s.containButtomImage} >
                        <Span class={s.viewPlusMinus}>
                          <Icon style={{ padding: 6 }} size={19} name="plus" onPress={() => plus(index, item)} color='blue' />
                          <Span pv={4} />
                          <Icon style={{ padding: 6 }} size={19} name="minus" color='red' onPress={() => item.num > 0 && minus(index, item)} />
                        </Span>
                        <Span class={[s.viewInputNum]} >
                          <P p={2} children={allfood[index].num.toString()} />
                        </Span>
                        <Span class={s.textPrice}>
                          <P p={0} webStyle={{textAlign:'right'}} nativeStyle={{textAlign:'left'}} >قیمت:</P>
                          <P p={0} class={{}} >{p.spacePrice(item.price, null)} <P p={0} fontSize={12}>ت</P></P>
                        </Span>
                      </Span>
                    </Span>
                  ))}
                </Scroll>
              }
            <Span>
            </Span>
          </Span>
        </Container >
  )
}
export default FinallFoodPayment
