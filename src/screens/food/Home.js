import React, { useEffect } from 'react'
import s from './Food.module.scss'
import { Loading, Button, Img, P, Scroll, Span, Press, FlatList } from '../../Components/Html';
import Svg from './other/Svg';
import { Platform } from 'react-native';

const Home = (p) => {
  // const p = context()
  p._food.getTitileFoods()
  p._food.setPagination()
  p._food.backHandler()
  p._user._token()
  p._user._tokenValue()
  p._user.getLastPayment()


  return (
    <Span class={s.container}>
      <Svg width={p.width} />
      {Platform.OS === 'web' ?
       <Scroll class={s.scroll} containClass={s.h_scrollContain} style={{maxWidth:1400}} >
                
        {!p.foods.length ?
          <Loading h={400} />
          :
          p.tokenValue.isAdmin !== 'courier' ?
            p.foods.map((food) => (
              <Press key={food._id} class={s.pressOpacity} onClick={() => { p.navigation.navigate(`ChildFood`, { id: food._id, title: food.title }); p.setchangeFood(!p.changeFood), p.setass(!p.ass) }} >
                <Img alt={food.title} src={{ uri: `${p.localhost}/upload/food/${food.imageUrl}` }} class={s.imageFood} containClass={[s.imageFood, s.containImageShadow]} />
                <P class={s.textTitle} >{food.title}</P>
              </Press>
            ))
            :
            <>
              <Span class={s.courierContain}>
                <Button onPress={() => p.navigation.navigate("Address")} >address</Button>
              </Span>
              <Button outline bgcolor='red' class={s.logoutBtn} onPress={() => p.navigation.navigate("Logout")}>logout</Button>
            </>
        }
      </Scroll>
        :
      (!p.foods.length ?
        <Loading h={400} />
        :  
        <FlatList
          columnWrapperStyle={{ alignSelf: 'center' }}
          numColumns={3}
          keyExtractor={(f) => f && f._id.toString()}
          style={{width:'98%'}}
          data={p.foods}
          renderItem={({ item, index }) => (
            p.tokenValue.isAdmin !== 'courier' ?
              <Press key={item._id} class={s.pressOpacity} webStyle={{ minWidth: '30%' }} onClick={() => { p.navigation.navigate(`ChildFood`, { id: item._id, title: item.title }); p.setchangeFood(!p.changeFood), p.setass(!p.ass) }} >
                <Img alt={item.title} src={{ uri: `${p.localhost}/upload/food/${item.imageUrl}` }} class={s.imageFood} containClass={[s.imageFood, s.containImageShadow]} />
                <P class={s.textTitle} >{item.title}</P>
              </Press>
              :
              <>
                <Span class={s.courierContain}>
                  <Button onPress={() => p.navigation.navigate("Address")} >address</Button>
                </Span>
                <Button outline bgcolor='red' class={s.logoutBtn} onPress={() => p.navigation.navigate("Logout")}>logout</Button>
              </>
          )}
        />)
      }


    </Span>
  )
}
export default Home