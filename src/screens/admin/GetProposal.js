import React, { useState } from 'react'
import { Div, FlatList, Icon, M_icon, P, Span } from '../../Components/Html'

const GetProposal = (p) => {
  const [mapId] = useState(new Map())
  const [show,setshow] = useState(true)
  p._admin.getProposal()
  const _delete = () => p._admin.deleteMultiProposal()
  return (
    <>
      <Span fd='row-reverse' mv={4} >
        <Icon name='trash' size={22} style={{ marginHorizontal: 14 }} onClick={_delete} />
         <M_icon name='select-all' size={22} style={{ marginHorizontal: 14 }}
          onClick={() => {
            for (let item of p.proposal) {
              setshow(!show)
              mapId.set(item._id, show)
              p.$.id(item._id).$({ backgroundColor: show ? '#1d6' : '#ddd' })
              if (show) p.setproposalId(proposalId => proposalId.concat(item._id))
              else p.setproposalId(proposalId => proposalId.filter((ps) => ps !== item._id))
            }
          }} />
      </Span>

      <FlatList
        data={p.proposal}
        bgcolor='#fff'
        webStyle={{ height: 'calc(100vh - 100px)' }}
        nativeStyle={{ height: '100%' }}
        contentContainerStyle={{ width: '100%', minWidth: '60%', alignSelf: 'center' , paddingBottom:15}}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <Div p={9} bgcolor='#ddd' border={[1, 'silver']} br={2} mt={15} as='center' w={300} >
            <P w={14} h={14} mt={-7} mb={3} nativeStyle={{marginHorizontal:10}} border={[1, '#aaa']} id={item._id} onClick={() => {
              mapId.set(item._id, !mapId.get(item._id))
              p.$.id(item._id).$({ backgroundColor: mapId.get(item._id) ? '#1d6' : '#ddd' })
              if (mapId.get(item._id)) p.setproposalId(proposalId => proposalId.concat(item._id))
              else p.setproposalId(proposalId => proposalId.filter((ps) => ps !== item._id))
            }} />
            <Span p={12} nativeStyle={{marginHorizontal:10}} mb={7} bgcolor='#fff' ><P fs={12} fm='IRANSansWeb-light' >{item.message}</P></Span>
          </Div>
        )}
      />
    </>
  )
}

export default GetProposal