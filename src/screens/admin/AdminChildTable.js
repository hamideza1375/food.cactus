import React from 'react';
import {Pagination, Loading, Button, Span, Table } from '../../Components/Html';
import s from "./Admin.module.scss"
import _Modal from './Modal';

const AdminChildTable = (p) => {
  const sendSetavailable = async (available, id, id2) => p._admin.available(available, id, id2)
  p._food.getChildFood()

  return (
    <Span class={s.container}>

      <Span class={s.containChildTable} >
        <Button h={40} w='98%' alignSelf='center' mv={5} onPress={() => p.navigation.navigate("CreateChildFood", { id: p.route.params.id, title:p.route.params.title })}>ساخت </Button>
        <Span h={'calc(100vh - 190px)'} class={s.containerChildTable}>
          {!p.current ?
            <Loading />
            :
            <Table
              color={['#555', '#656565', 'white']}
              border={[1, '#353535']}
              header={['موجودیت', 'ویرایش', 'حذف', ' قیمت', 'عنوان']}
              body={['title', 'ویرایش', ' حذف', 'price', 'title']}
              btn3={'#d33'}
              btn3onClick={() => { p.setshowModal(true); p.setid(p.route.params.id); p.setid2(p.current[p.$food[1]]._id) }}
              btn2={'#2b3'}
              btn2onClick={() => { p.navigation.navigate("EditChildFood", { id: p.route.params.id, id2: p.current[p.$food[1]]._id, title: p.current[p.$food[1]].title }) }}
              btn1={'#59f'}
              btn1onClick={() => { p.setshow(true); p.setid2(p.current[p.$food[1]]._id) }}
              btn1Opacity
              object={p.current}
              setobject={p.set$food}
            />
          }
        </Span>
        <_Modal availabe={(param) => { sendSetavailable(param, p.route.params.id, p.id2); p.setshow(false) }} showModal={p.show} setshowModal={p.setshow} message={'موجود نیست؟' + " (" + p.current[p.$food[1]]?.title + ')'} _admin={p._admin} />
        <_Modal showModal={p.showModal} setshowModal={p.setshowModal} id={p.id} id2={p.id2} message={'حذف شود؟ ' + " (" + p.current[p.$food[1]]?.title + ')'} _admin={p._admin} />
      </Span>

      <Span class={s.paginationContainer} >
       { p.foodMap.get(p.route.params.id) && 
        <Pagination
          food={p.foodMap.get(p.route.params.id)}
          setcurrent={p.setcurrent}
          pageLimit={p.pageLimit}
          ass={p.ass}
          page={p.page}
          setpage={p.setpage}
          currentPage={p.currentPage}
          setcurrentPage={p.setcurrentPage}
        />}
      </Span>

    </Span>
  )
}
export default AdminChildTable

