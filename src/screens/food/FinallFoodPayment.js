import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Loading, Button, Container, ImgBackground, P, Scroll, Span, Table, Modal, Textarea } from '../../Components/Html';
import s from "./Food.module.scss"

const FinallFoodPayment = (p) => {
  const [openModal, setopenModal] = useState(false)
  const [descriptionLabel, setdescriptionLabel] = useState("اگر توضیحی در مورد سفارش نیاز هست اینجا کلیک کنید")
  const [description, setdescription] = useState("")
  
  p._user.getLastPayment()

  const inputPrice = `${p.allprice ? p.allprice : '0'}`
  const allfood = p.allfood.filter((a) => a.num > 0)
  p._food.allPrice()
  const plus = (index, item) => p._food.plustNum(index, item)
  const minus = (index, item) => p._food.minusNum(index, item)
  const deleteAsyncStorage = () => p._food.deleteStorage()

  return (
    <Container class={s.viewHead} >
      <Span class={s.viewOne}>
        <Span class={s.viewConseal} >
          <Button disabled={allfood.length ? false : true} bgcolor="orange" class={s.btnFinal} onPress={deleteAsyncStorage} >پاک کردن همه</Button>
        </Span>
        <Span style={{ width: '96%', alignSelf: 'center', height: '100%' }} >
          {!allfood.length ?
            <Loading time={500} color={'red'} animating={allfood.length ? false : true} />
            :
            <Scroll contentContainerStyle={{ paddingBottom: 60 }} >
              <Table
                color={['#f90', '#f80', 'white']}
                fontSize={14}
                header={['جمع', 'عنوان']}
                body={['total', 'title']}
                object={allfood}
                border={[1, '#f70']}
              />
              <Span>
                <P fontSize={13.5} border={[.5, '#f70']} style={{ height: 33, flex: 1, paddingVertical: 5, textAlign: 'center', alignSelf: 'center', width: '99%' }} >قیمت کل: </P>
                <P fontSize={13.5} border={[.5, '#f70']} style={{ height: 33, flex: 1, paddingVertical: 5, textAlign: 'center', alignSelf: 'center', width: '99%' }} >{p.spacePrice(inputPrice, null)} ت</P>
              </Span>
            </Scroll>
          }
        </Span>
      </Span>
      <Span class={s.viewPayment}>
        <Span class={s.viewPayTwo}>
          <Button style={{borderBottomWidth:1}} disabled={allfood.length ? false : false} bgcolor="orange"
            class={s.btnFinal}
            onPress={() => { setopenModal(true) }}
          >
            {descriptionLabel}
          </Button>
        </Span>

        <Span class={s.viewPayTwo} mt={5}>
          <Button disabled={allfood.length ? false : true} bgcolor="orange"
            class={s.btnFinal}
            onPress={() => { p.navigation.navigate("Location", { allprice: p.allprice, allFoodTitle: p.allFoodTitle, description:description }) }}
          >
            پرداخت
          </Button>
        </Span>

        {!allfood.length ?
          <Loading time={500} color={'red'} animating={allfood.length ? false : true} />
          :
          <Scroll style={{ width: '99%', alignSelf: 'center' }} containClass={s.scrollContent} >
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
                    <P p={0} webStyle={{ textAlign: 'right' }} nativeStyle={{ textAlign: 'left' }} >قیمت:</P>
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
      <Modal show={openModal} setshow={setopenModal} style={{ width: '70%', maxWidth: 400 }} >
        <Textarea onChangeText={setdescription} placeholder="توضیحات" maxLength={400} style={{ fontSize: 12, width: '80%' }} />
        <Span fd="row" >
          <Button ml={5} h={30} mt={7} onClick={()=>{setopenModal(false); description.trim() && setdescriptionLabel('توضیحات شما ثبت شد ✅')}} >تایید</Button>
          <Button mr={5} h={30} mt={7} onClick={()=>{setopenModal(false);setdescription("")}} bgcolor="red">لغو</Button>
        </Span>
      </Modal>

    </Container >
  )
}
export default FinallFoodPayment
