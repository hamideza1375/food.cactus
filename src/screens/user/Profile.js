import React from 'react'
import { B_icon, Button, Img, P, Press, Span, Scroll } from '../../Components/Html'
import s from './User.module.scss';
import share from '../../utils/share'

const Profile = (p) => {
  p._food.getImageProfile()
  p._user._tokenValue()
  p._user.profile()
  p._user.getLastPayment()
  const imgPicker = () => p._user.imagePicker()

  return (
    <Span style={{ flex: 1, backgroundColor: '#aaf' }} >
      <Span class={s.headProfile}>
        <Span class={s.viewUserImage}>
          <Span onClick={imgPicker} class={s.containImage}>
            {p.imageProfile ?
              <Img src={{ uri: `${p.localhost}/upload/profile/${p.imageProfile}` }} class={s.profileImage} containClass={s.profileImage} />
              :
              <Span>
                <Span class={s.iconPlusImage} nativeStyle={{ justifyContent: 'center', transform: [{ scale: .9 }] }} webStyle={{ width: 25, height: 27.5 }} >
                  <P ta='center' fs={18} >➕</P>
                </Span>

                <Img src={require("../../assets/images/user.jpg")} class={s.profileImage} containClass={s.profileImage} />
              </Span>
            }
            <Span style={{ top: 2 }} >
              <P p={0} class={s.textUserImage}>{p.tokenValue?.fullname}</P>
            </Span>
          </Span>
        </Span>
        <Span w='70%'  >
          <Span class={s.containHeaderInfo} >
            <B_icon icon='comment' size={.85} bgcolor='silver' />
            <B_icon icon='comment' size={.85} bgcolor='silver' />
            <B_icon icon='share-alt' size={.85} bgcolor='silver' onClick={async () => { share('http://localhost:3000', 'فسفود کاکتوس') }}
            />
          </Span>
        </Span>
      </Span>
      <Span style={{ flex: 1 }} >
        <Span class={s.bodyProfile} >
          <Scroll style={{width:'100%'}}>
            <Press onClick={() => p.navigation.navigate('SendProposal')} style={{ flexDirection: 'row', alignItems: 'center' }} >
              <B_icon icon='comment' size={.6} bgcolor='#444' border='#333' />
              <P p={0} fontSize={27} >ارسال انتقادات و پیشنهادات</P>
            </Press>
          </Scroll>

        </Span>
      </Span>
          {p.tokenValue.isAdmin === 'chief' ? <Button bgcolor='#555' w={'100%'} mt='auto' onClick={() => p.navigation.navigate("AdminTitleAllFood")} >پنل ادمین</Button> : <></>}
    </Span>
  )
}
export default Profile
