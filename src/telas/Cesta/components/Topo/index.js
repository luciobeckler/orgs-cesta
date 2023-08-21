import React from 'react'

import topo from '../../../../../assets/topo.png'

import { Image, Dimensions, StyleSheet } from 'react-native'
import TextoPersonalizado from '../../../../components/Text'

const width = Dimensions.get('screen').width

export default function Topo({ titulo }) {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <TextoPersonalizado style={estilos.titulo}>{titulo}</TextoPersonalizado >
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
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
    },
})