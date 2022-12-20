import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { PermissionsAndroid, View } from 'react-native';
import Frame from '../../Components/other/Frame';
import { localhost } from '../../utils/axios/axios'
import Geolocation from 'react-native-geolocation-service';


const Location = (p) => {

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
      ).then(() => {
        Geolocation.getCurrentPosition(
          ({ coords }) => {
            p.setregion({ lat: coords.latitude, lng: coords.longitude, })
            p.setlocationPermission(true)
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
       })
    }
  }, [])


  const [token, settoken] = useState({})
  p.useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      settoken(token)
    })
  }, [])


  return (
    <View flex={1}>
      <Frame source={{
        html: `
      
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="${localhost}/css/leaflet.css" />
</head>

<div style="display: flex; justify-content: flex-end; height: 100%; ">




  <form id="formSearch" onsubmit="submited(event)"
    style="width:250px;margin: 3px 2px 0 0; display:flex;flex-direction: row-reverse; position: absolute; align-items: flex-end; ">
    <input onchange="serchInput(event.target.value)" type="text" placeholder="search"
      style="text-align: right;border-radius: 1px;border: 1px solid rgb(150, 146, 146);display:block;flex-grow: 1;height: 30.5px;position:relative;z-index:1000" />
    <i onclick="sendIcon()"
      style="border-radius: 1px;padding: 2px 5px 0px;border: 1px solid rgb(150, 146, 146); background-color: #fff;font-size: 19px;display:block;height: 30px;width: 37px;position:relative;z-index:1000;box-sizing:border-box">🔎</i>
      
      </form>

      <span id='btnGetLocation' onclick="setLocation()" style='border:2px solid #bfbfbf;display: flex; alignItems: center; justifyContent: center; textAlign: center; background: #fff;padding: 0; borderRadius: 4px; zIndex: 10000; top: 85; left: 17.5; fontSize: 20px; height: 31px; maxHeight: 31px; width: 30px; maxWidth: 34px; borderWidth: 0; boxShadow: .2px 1.5px 4px #333d;z-index:10000;position:absolute;border-radius:4px;align-Items:center;justify-content:center'><p style="transform: rotate(-65deg); padding: 0; margin: 0; font-size:24px; text-align:center; margin:auto; margin-top:-5px " >⌲</p></span>
      <span id='btnGetLocation2' onclick="setLocation2()" style='border:2px solid #bfbfbf;display: flex; alignItems: center; justifyContent: center; textAlign: center; background: #fff;padding: 0; borderRadius: 4px; zIndex: 10000; top: 85; left: 17.5; fontSize: 20px; height: 31px; maxHeight: 31px; width: 30px; maxWidth: 34px; borderWidth: 0; boxShadow: .2px 1.5px 4px #333d;z-index:10000;position:absolute;border-radius:4px;align-Items:center;justify-content:center'><p style="transform: rotate(-65deg); padding: 0; margin: 0; font-size:24px; text-align:center; margin:auto; margin-top:-5px " >⌲</p></span>


      <div id="map" style="width:100%; height: 100%;display:flex;"></div>




<div id='bottomDiv' style='z-index:10000;position:absolute;bottom:0;display:flex;justify-content:space-between;width:94%;background:#fff;padding:15px 5px;flex-direction:column'>
<div style='display:flex;flex-direction:row-reverse;justify-content:space-between;width:100%'>
<span style='display:flex;' > <input type='number' style='text-align:center;width:45px;height:40px' id='plaque' /><p style='margin:7px 5px' > :پلاک </p> </span>
<span style='display:flex;' > <input type='number' style='text-align:center;width:45px;height:40px' id='floor'/><p style='margin:7px 5px' >:طبقه </p></span>
<button id='btnPayment' onclick="sendPayment()" style='border:1px solid #3af;right:2px;background:#3afa;height:42px;width:75px;font-size:15px;border-radius:5px;color:#444' >پرداخت</button>
</div>

<div style="display:flex; flex-direction:row-reverse; padding-top:15px; width:100%" >
   <p style="text-align:right;" > :آدرس</p>
   <p id="address" style="text-align:right;margin-right:3px" ></p>
</div>



      <div>

      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="${localhost}/js/leaflet.js"></script>
      <script>
      
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios.defaults.headers.common["Authorization"] = ${JSON.stringify(token)}

      const origin = ${JSON.stringify(p.route.params?.origin)}

      let revers = {}

      document.getElementById('btnPayment').style.display = origin && 'none'
      document.getElementById('btnGetLocation').style.display = origin || ${!p.locationPermission} && 'none'
      document.getElementById('btnGetLocation2').style.display = !origin && 'none'

      document.getElementById('formSearch').style.display = origin && 'none'
      document.getElementById('bottomDiv').style.display = origin && 'none'

        function submited(event) {
          event.preventDefault()
          sendIcon()
        }
        let show = true
        let search

        function serchInput(text) { search = text }

        let mark = origin?{ lat: origin.latitude, lng: origin.longitude }:{ lat: ${p.region.lat}, lng: ${p.region.lng} }
        var myIcon = L.icon({ iconUrl: '${localhost}/images/mark.png', iconSize: [38, 95], popupAnchor: [0, -30] });
        let markerOption = { draggable: origin?false:true, icon: myIcon }
        
        let option = { center: mark, zoom: origin ? 15: 18, }
        var map = L.map('map', option)

        let mark2 = { lat: ${p.region.lat}, lng: ${p.region.lng} }
        var myIcon2 = L.icon({ iconUrl: '${localhost}/images/circle.png', iconSize: [17, 17] });
        let markerOption2 = { draggable: false, icon: myIcon2 }
        let marker2 = ${p.locationPermission} && L.marker(mark2, markerOption2).addTo(map)
        var circle1 = ${p.locationPermission} && L.circle(mark2, 5).addTo(map);
        var circle2 = ${p.locationPermission} && L.circle(mark2, 50).addTo(map);

        map.on('click', (ev) => { marker.openPopup() })
        let marker = L.marker(mark, markerOption).addTo(map)
        var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        map.addLayer(layer);

        


        window.addEventListener('load', async (ev) => {
          const response = await axios.post('${localhost}/reverse', JSON.stringify(mark),{ headers: { 'Content-Type': 'application/json' } })
          if (response.status) {
            const data = await response.data
            if (data[0]) {
              const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
              const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
              const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
              revers = data[0]
              const street = one + ' ' + two + ' ' + three
              marker.bindPopup(street).openPopup()
              document.getElementById('address').innerHTML = street 
          }}
        })

        marker.on('dragstart', async (ev) => {
        document.getElementById('bottomDiv').style.display = 'none'
        })

        marker.on('dragend', async (ev) => {
         document.getElementById('bottomDiv').style.display = 'flex'

          map.setView({ lat: ev.target._latlng.lat, lng: ev.target._latlng.lng })
          const response = await axios.post('${localhost}/reverse', JSON.stringify({ lat: ev.target._latlng.lat, lng: ev.target._latlng.lng }),{ headers: { 'Content-Type': 'application/json' } })
          if (response.status) {
            const data = await response.data
            if (data[0]) {
              const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
              const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
              const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
              revers = data[0]
              const street = one + ' ' + two + ' ' + three
              marker.bindPopup(street).openPopup()
              document.getElementById('address').innerHTML = street 
            }
          }
        });

        async function sendIcon(data) {
          const response = await fetch('${localhost}/geocode', { method: 'post', body: JSON.stringify({ loc: 'سبزوار' + ' ' + search }), headers: { 'Content-Type': 'application/json' } })
          if (response.status) {
            const data = await response.json()
            if (data[0]) {
              const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
              const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
              const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
              revers = data[0]
              const street = one + ' ' + two + ' ' + three
              map.setView({ lat: data[0].latitude, lng: data[0].longitude });
              marker.setLatLng({ lat: data[0].latitude, lng: data[0].longitude })
              marker.bindPopup(street.trim() ? street : '!پیدا نشد').openPopup()
              document.getElementById('address').innerHTML = street 
              search = ''
            }
            else marker.bindPopup('!پیدا نشد ').openPopup()
          }
        }

       async function setLocation(){
        let Mark = { lat: ${p.region.lat}, lng: ${p.region.lng} }
          map.setView(mark);
            marker.setLatLng(mark)

            const response = await axios.post('${localhost}/reverse', JSON.stringify(mark),{ headers: { 'Content-Type': 'application/json' } })
            if (response.status) {
              const data = await response.data
              if (data[0]) {
                const one = (data[0].streetName && data[0].streetName !== data[0].formattedAddress.split(",")[0]) ? data[0].streetName : ''
                const two = data[0].formattedAddress.split(",")[0] ? data[0].formattedAddress.split(",")[0] : ''
                const three = data[0].formattedAddress.split(",")[1] ? data[0].formattedAddress.split(",")[1] : ''
                revers = data[0]
                const street = one + ' ' + two + ' ' + three
                marker.bindPopup(street).openPopup()
                document.getElementById('address').innerHTML = street 
            }}
          }
        

          async function setLocation2(){
            let marks2 = { lat: ${p.region.lat}, lng: ${p.region.lng} }
              map.setView(marks2);
              marker2.setLatLng(marks2)
              circle1.setLatLng(marks2)
              circle2.setLatLng(marks2)
              }



        async function sendPayment(){
          if(!revers?.formattedAddress) return
         if(!document.getElementById('plaque').value || !document.getElementById('floor').value) return alert('کادر پلاک و طبقه را پر کنید')
          let {data, status} = await axios.post('${localhost}/confirmpayment?allprice=${p.allprice}', {
            foods: ${JSON.stringify(p.totalTitle)},
            plaque: document.getElementById('plaque').value,
            floor: document.getElementById('floor').value,
            formattedAddress: JSON.stringify(revers.formattedAddress),
            streetName: JSON.stringify(revers.streetName),
            origin: JSON.stringify(revers)
          })

          if(status === 200) window.location.assign(data)
          else if(status === 385) alert('کادر پلاک و طبقه را پر کنید')
          else if(status === 500) alert('مشکلی از سمت سرور پیش آمد')

        }

      </script>

    </div>

  </html>

      `}} />

    </View>
  )
}

export default Location;