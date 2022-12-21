import React, { useEffect } from 'react'
import s from './Food.module.scss'
import { localhost } from '../../utils/axios/axios'
import { FlatList, Pagination, Loading, StyleSheet, ImgBackground, P, Press, Span, Icon, Animated, Img, Container } from '../../Components/Html'
import { Image, Platform } from 'react-native';
import SearchInput from './other/SearchInput';

const ChildFood = (p) => {
  p._food.getChildFood()
  p._food.allPrice()
  const searcher = (text) => { p._food.sercher(text); p.settextSearch(text) }
  const foodAsc = () => p._food.foodAsc(p.setpage)
  const foodDesc = () => p._food.foodDesc(p.setpage)
  const plus = (index, item) => { p._food.plustNum(index, item, p.setpage, p.page) }
  const minus = (index, item) => { p._food.minusNum(index, item, p.setpage, p.page) }
  const inputPrice = `${p.allprice ? p.allprice : '0'}`
  const open = () => Animated.timing(p.anim, { toValue: 85, duration: 150, useNativeDriver: false }).start();
  const close = () => Animated.timing(p.anim, { toValue: 0, duration: 150, useNativeDriver: false }).start();

  const open2 = () => Animated.timing(p.anim2, { toValue: 90, duration: 150, useNativeDriver: false }).start();
  const close2 = () => Animated.timing(p.anim2, { toValue: 10, duration: 150, useNativeDriver: false }).start();
  
  p._user.getLastPayment()

  if (!p.courseIdValidator(p.route.params.id)) return p.navigation.navigate('NotFound')
  useEffect(() => { if (inputPrice == 0) { close(); close2() } }, [inputPrice])

  return (
    <>
      <Container style={{ overflow: 'hidden' }} >
        <SearchInput {...p} searcher={searcher} foodAsc={foodAsc} foodDesc={foodDesc} />
        <Span f={Platform.OS === 'web' ? 1 : .8} class={s.viewContainer} land={{ paddingHorizontal: 8, alignSelf: 'center' }} >
          <>
            {!p.current ?
              <Loading />
              :
              <FlatList initialNumToRender={3} colomn1={2} colomn2={3} colomn3={4} colomn4={5}
                keyExtractor={(f) => f && f._id.toString()}
                data={p.current}
                contentContainerStyle={{ paddingBottom: inputPrice != 0 ? 130 : 50, width: '99%' }}
                style={{ width: '100%' }}
                renderItem={({ item, index }) => (
                  <>
                    <Span _col1={s.c1} _col2={s.c2} _col3={s.c3} _col4={s.c4} style={[{ opacity: item.available ? 1 : .4 }, { height: 180 }, (item.num > 0) ? styles.infoShadow : styles.silverShadow, p.width < 280 && { width: '98%' }]}>
                      <Press style={{ height: '55%', backgroundColor: '#eee' }} onPress={() => { p.navigation.navigate("SingleFood", { title: item.title, id: p.route.params.id, id2: item._id, page: p.page }) }} >
                        <ImgBackground class={[s.img, s.radius]} containClass={s.radius} src={{ uri: `${localhost}/upload/food/${item.imageUrl}` }}>
                          <P p={0} mt='auto' class={[s.textTitleChild]} >{item.title}</P>
                        </ImgBackground>
                      </Press>
                      <Span class={s.subImg} ph={2}>
                        <Span class={s.ViewSubItem}>
                          <Span pr={3} mt={2} >
                            <P p={0} pl={2} fs={13} col1={{ fontSize: 11.5 }} >قیمت:{p.spacePrice(item.price)}</P>
                            <Span style={{ top: 12, flexDirection: 'row', alignSelf: 'flex-end' }} >
                              {item.meanStar >= 5 && <Icon name='star' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar > 4 && item.meanStar < 5 && <Icon name='star-half' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar >= 4 && <Icon name='star' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar > 3 && item.meanStar < 4 && <Icon name='star-half' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar >= 3 && <Icon name='star' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar > 2 && item.meanStar < 3 && <Icon name='star-half' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar >= 2 && <Icon name='star' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar > 1 && item.meanStar < 2 && <Icon name='star-half' size={p.width < 360 ? 13 : 16} color='orange' />}
                              {item.meanStar >= 1 && <Icon name='star' size={p.width < 360 ? 13 : 16} color='orange' />}
                            </Span>
                          </Span>
                          <Span mt={-2} class={[s.TextPlus]} style={p.width < 317 ? { minWidth: 52 } : { minWidth: 63 }} >
                            {item.available ?
                              <Press dir='rtl' class={[s.viewIcons]} >
                                <Icon size={20} name="plus" style={{ paddingVertical: 5 }} onPress={() => { open(); open2(); plus(index, item) }} color='blue' />
                                <Span mv={2} />
                                <Icon size={20} name="minus" style={{ paddingVertical: 5 }} onPress={() => { p.current[index].num > 0 && minus(index, item) }} color='red' />
                              </Press>
                              : <P />}
                            <Span class={[s.vpls]} >
                              {item.available ?
                                <>
                                  <P fs={13} p={0} onPress={() => { p.current[index].num == 0 && plus(index, item) }
                                  } style={{ fontSize: 13 }} col1={{ fontSize: 11.5 }} >افزودن</P>
                                  <P fs={13} p={0} children={p.allprice ? p.current[index] && p.current[index].num.toString() + " " + 'عدد' : '0 ' + 'عدد'}
                                    style={{ marginTop: 3, fontSize: 13 }} col1={{ fontSize: 11.5 }} />
                                </>
                                : <P fs={13} p={3} style={{ color: 'red', borderWidth: 1, borderColor: 'red', marginTop: 10, width: 50, textAlign: 'right', borderColor: 'red', paddingRight: 5, transform: [{ rotate: '-20deg' }], fontSize: 12 }} col1={{ fontSize: 11 }}>ناموجود</P>}
                            </Span>
                          </Span>
                        </Span>
                      </Span>
                    </Span>
                  </>)} />
            }
          </ >

        </Span>
      </Container>

      <Animated.View style={[styles.paginationContain, { bottom: p.anim2 }]} >
        {p.foodMap.get(p.route.params.id) &&
          <Pagination food={p.foodMap.get(p.route.params.id)} current={p.current} setcurrent={p.setcurrent} pageLimit={p.pageLimit} ass={p.ass} page={p.page} setpage={p.setpage} currentPage={p.currentPage} setcurrentPage={p.setcurrentPage} />}
      </Animated.View>
      <Animated.View f={.2} style={[styles.bottomPayment, { height: p.anim, }]}>
        <Press onClick={() => {if (p.tokenValue.fullname) p.navigation.navigate("FinallFoodPayment");else p.navigation.navigate("Login", { name: 'ChildFood', price: inputPrice })}} >
          <Img webStyle={{ marginLeft: 15 }} class={s.imagePayment} src={{ uri: `${localhost}/images/food_image.jpg` }} />
        </Press>

        <Press style={{height:'100%',flexGrow: 1,}} onClick={() => {if (p.tokenValue.fullname) p.navigation.navigate("FinallFoodPayment");else p.navigation.navigate("Login", { name: 'ChildFood', price: inputPrice })}} ></Press>

        <Press onClick={() => {if (p.tokenValue.fullname) p.navigation.navigate("FinallFoodPayment");else p.navigation.navigate("Login", { name: 'ChildFood', price: inputPrice })}} class={s.ViewPayment}>
          <P p={0} class={s.titleSubTitle} >مشاهده ی سبد و پرداخت 🛒</P>
          <Span class={s.containSubPrice}>
            <P pt={10} class={s.textPayment}>قیمت کل :</P>
            <P pt={10} >{p.spacePrice(inputPrice)} تومان</P>
          </Span>
        </Press>
      </Animated.View>

    </>
  )
}

export default ChildFood
const styles = StyleSheet.create({
  paginationContain: {
    height: 50,
    minHeight: 50,
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomPayment: {
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    alignSelf: 'space-around',
    shadowRadius: 6,
    shadowOpacity: Platform.OS === 'ios' ? .3 : .6,
    shadowColor: 'rgba(90, 90, 90, .5)',
    elevation: 10
  },
  infoShadow: {
    shadowRadius: 7,
    shadowColor: 'rgba(64, 138, 134, 0.7)',
  },
  silverShadow: {
    shadowRadius: 6,
    shadowColor: 'rgba(90, 90, 90, .5)',
  },

})