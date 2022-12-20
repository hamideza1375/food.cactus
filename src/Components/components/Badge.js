import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Badge = ({ bgcolor, color, text, top, left, right, bottom, style, scale=1 }) => {
    return (
        <View style={[styles.viewBadge, {
            backgroundColor: color ?
                (color == 'red') && '#f33' ||
                (color == 'blue') && '#22f' ||
                (color == 'green') && '#292' ||
                (color == 'yellow') && '#fa3' ||
                (color == 'black') && '#555' ||
                bgcolor
                :
                bgcolor ? bgcolor : "#f33",
        },
        { top: top ? top : -3, left, right, bottom, transform:[{scale}] }, style]} >
            <Text style={styles.textBadge} >
                {text}
            </Text>
        </View>
    )
}

export default Badge
const styles = StyleSheet.create({
    textBadge: {
        color: 'white',
        fontSize: 12.2,
        fontWeight: '900',
    },
    viewBadge: {
        width: 18,
        height: 18,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
    },
})