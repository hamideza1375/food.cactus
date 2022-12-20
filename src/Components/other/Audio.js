import React, { useEffect, useRef, useState } from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import Loading from '../components/Loading';
import Badge from '../components/Badge';
import Icon from 'react-native-vector-icons/FontAwesome';


const Audio = (props) => {

  const [music, setMusic] = useState(null)
  const [progress, setprogress] = useState(0)
  const [second, setsecond] = useState(0)
  const [show, setshow] = useState(true)
  const [change, setchange] = useState(true)

  let summer = useRef()


  const play = () => {
    summer.current = new Sound(props.source.uri, null, (err) => {
      if (err) {
        console.log('hata', err)
        return
      }
      summer.current.play((success) => {
        console.log('end', success)
      })

    })
    console.log('summer.current', summer.current)
    setMusic(summer.current)
  }


  useEffect(() => {
    if (music) {
      setInterval(() => {
        music.getCurrentTime((second, play) => {
          setsecond(second)
          setprogress(Math.max(0, second) / music.getDuration())
        })
      }, 100)
    }
  }, [music])


  useEffect(() => {
    return () => {
      music && music.stop()
    }
  }, [])



  return (
    <View style={[{ backgroundColor: !summer.current ? '#e9e9e9' : '#cfcfcf', paddingTop: 10, width: '100%', height: 100, alignSelf: 'center', borderRadius: 8 }, props.style]} >
      <Slider style={{ width: '90%', alignSelf: 'center' }} onValueChange={(e) => { summer.current && summer.current.setCurrentTime(e * summer.current.getDuration()) }} value={progress} />

      <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around' }} >

        <View style={{ height: 30, width: 30 }}>
          <Badge style={{ height: 30, width: 30 }} bgcolor='#aaa' top={15} text={Math.floor(second)} />
        </View>
        {summer.current && summer.current.getDuration() === -1 && !change
          ?
          <Loading showLoad={true} size={11} color={"red"} onPress={() => { setchange(!change); if (show) { play(); setshow(false) } if (!show) { change ? music.play() : music.pause() } }} style={{ width: 30, height: 30, top: 22 }} />
          :
          <Icon name={!change ? "pause" : "play"} size={27} style={{ top: 15 }} onPress={() => { setchange(!change); if (show) { play(); setshow(false) } if (!show) { change ? music.play() : music.pause() } }} />
        }

        <View style={{ height: 30, width: 30 }}>
          <Badge style={{ height: 30, width: 30, }} bgcolor='#aaa' top={15} text={summer.current && summer.current.getDuration() !== -1 ? Math.floor(summer.current.getDuration()) : 0} />
        </View>

      </View>

    </View>
  )
}
export default Audio



