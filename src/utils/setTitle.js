import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

 const setTitle = (title) => {
    const navigation = useNavigation()
    const route = useRoute()
    useEffect(() => {
        navigation.setOptions({ title: title ? title : route.params.title });
    }, [])
}

export default setTitle