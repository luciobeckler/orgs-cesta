import React from 'react'
import { Image, StyleSheet, Dimensions, Text } from 'react-native'

import topo from '../../assets/topo.png'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const width = Dimensions.get('screen').width

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhes da cesta</Text>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: "#FFFFFF",
        fontWeight: 'bold',
        padding: 16
    }
})
