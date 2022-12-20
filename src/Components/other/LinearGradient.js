import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


function Lineargradient({ children, colors = [], start = {}, style }) {
    return (

        <LinearGradient start={{ x: start?.x ? start.x : 1.5, y: start?.y ? start.y : .5 }} end={{ x: 0, y: 0 }} colors={colors} style={[{ flex: 1 }, style]}>

            {children}
        </LinearGradient>
    )
}

export default Lineargradient