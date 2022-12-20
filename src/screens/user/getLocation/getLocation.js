import Geolocation from 'react-native-geolocation-service';

export const getLocation = (p) => {
	p.useMemo(() => {
		Geolocation.watchPosition(({coords})=>{p.setlocationPermission(true);p.setregion({ lat: coords.latitude, lng: coords.longitude, })});
	}, [])
}