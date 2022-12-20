import React, { useState,useEffect } from 'react'
import { PermissionsAndroid, StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import GetLocation from 'react-native-get-location'

const Map = ({ region,coordinate, showsUserLocation, draggable, marker, onPress, onDragEnd, onSelect }) => {

  const [location, setlocation] = useState(coordinate)

  const [region2, setregion2] = useState({})

  useEffect(() => {

   GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 15000,
   })
      .then(location => {
         console.log(region2.latitude);
         setregion2({
           latitude:location.latitude,
           longitude:location.longitude,
           latitudeDelta: 0.002,
           longitudeDelta: 0.00400,
         })
      })
      .catch(error => {
         const { code, message } = error;
         console.warn(code, message);
      })

}, [])

  return (
    <View style={{ flex: 1 }}>
 {region2?.latitude && region2.longitude && <MapView
        onMapReady={() => { Platform.OS === 'android' && PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(granted => {/* alert(granted) */});}}
        region={region2}
        showsUserLocation={showsUserLocation}
        followsUserLocation={true}
        onPress={onPress}
        style={StyleSheet.absoluteFillObject}
        onRegionChange={(e)=>{setlocation(e);}}
        // provider={PROVIDER_GOOGLE}
        showsMyLocationButton={true}
        showsCompass={true}
        zoomEnabled={true}
        rotateEnabled={true}
      >
        {marker && <Marker
        followsUserLocation={true}
          draggable={draggable}
          coordinate={location}
          onDragEnd={onDragEnd}
          onSelect={onSelect}
        />}

      </MapView>}

    </View >
  );
}


export default Map