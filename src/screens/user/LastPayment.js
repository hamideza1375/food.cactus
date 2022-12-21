import React from 'react'
import { Span, P } from '../../Components/Html'

const GetProposal = (p) => {
  p._user.getLastPayment()
  return (
    <Span style={{ width: '100%', backgroundColor: '#fff', paddingTop: 50 }} webStyle={{ height: 'calc(100vh - 130px)' }} nativeStyle={{ height: '100%' }} >
      <>
      {p.lastPayment.floor && <Span style={{ alignSelf: 'center', marginTop: 25, shadowOpacity: .4, elevation: 6, width: '90%', shadowRadius: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: 'silver', borderRadius: 7, padding: 12, alignItems: 'center' }} >

          <Span style={{ alignSelf: 'center', borderWidth: .3, borderColor: '#888', width: '100%', marginVertical: 15, paddingHorizontal: 15, paddingTop: 15, backgroundColor: '#f5f5f5', borderRadius: 4 }}>
            <Span style={{ borderBottomWidth: .2, borderColor: '#888', paddingBottom: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }} >
              <P ><P style={[{ fontWeight: 'bold', textAlign: 'left', }]} >نام: </P>{p.lastPayment.fullname}</P>
              <Span style={{ flexDirection: 'row' }}>
                <P style={{ fontWeight: 'bold', textAlign: 'left' }} >شماره تلفن: </P>
                <P  >{p.lastPayment.phone}</P>
              </Span>
            </Span>


            <Span style={{ borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, }} >
              <P> <P style={{ fontWeight: 'bold' }} >آدرس: </P> <P>{p.lastPayment.formattedAddress}</P></P>
            </Span>


            <Span style={{ borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, }} >
              <P  ><P style={{ fontWeight: 'bold' }} >پلاک: </P>{p.lastPayment.floor}</P>
              <P  ><P style={{ fontWeight: 'bold' }} >طبقه: </P>{p.lastPayment.plaque}</P>
            </Span>



            <Span style={{ borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, }} >
              <P> <P style={{ fontWeight: 'bold' }} >نام غدا: </P> <P>{p.lastPayment.foodTitle}</P></P>
            </Span>

            
            <Span style={{ paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, }} >
              <P  ><P style={{ fontWeight: 'bold' }} >قیمت: </P>{p.spacePrice(p.lastPayment.price)} تومان</P>
              <P style={{ color: '#ababab', }}>{p.moment(p.lastPayment.createdAt).format('jYYYY/jM/jD hh:mm:ss')}</P>
            </Span>
          </Span>

        </Span>}
      </>

    </Span>

  )
}

export default GetProposal









