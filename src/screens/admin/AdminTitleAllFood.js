import React from 'react';
import { Loading, Button, Scroll, Span, Table } from '../../Components/Html';
import s from "./Admin.module.scss"
import Modal from './Modal';


const AdminTitleAllFood = function (p) {
  p._food.setPagination()
  p._food.getTitleFood()

  return (
      <Scroll containClass={s.container}>
      <Button mt={2} h={40} w='89.8%' onPress={() => p.navigation.navigate("CreateTitleAllFood")}>ساخت دسته ی اغذیه</Button>

        <Span class={s.containTable} >
          {
            !p.foods.length ?
              <Loading style={{ top: 30 }} animating={p.foods.length ? false : true} />
              :
              <Table
                color={['#555', '#656565', 'white']}
                border={[1, '#353535']}
                header={['نمایش','ویرایش', 'حذف', 'عنوان']}
                body={['نمایش','ویرایش', 'حذف', 'title']}
                btn3={'#d33'}
                btn3onClick={() => { p.setshowModal(true); p.setid(p.foods[p.$food[1]]._id) }}
                btn2={'#2b3'}
                btn2onClick={() => { p.navigation.navigate("EditTitleAllFood", { id: p.foods[p.$food[1]]._id, title: p.foods[p.$food[1]].title, show: p.showModal }) }}
                btn1={'#07d'}
                btn1onClick={() => { p.navigation.navigate("AdminChildTable", { id: p.foods[p.$food[1]]._id, title: p.foods[p.$food[1]].title }) }}
                fontSize={16}
                object={p.foods}
                setobject={p.set$food}
                mt={10}
              />
          }

        <Modal showModal={p.showModal} setshowModal={p.setshowModal} id={p.id} message={'حذف شود؟ ' + " (" + p.foods[p.$food[1]]?.title + ')'} _admin={p._admin} />
        </Span>
      </Scroll>

  )
}

export default AdminTitleAllFood