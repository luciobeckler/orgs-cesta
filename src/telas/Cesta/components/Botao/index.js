import React from 'react'
import TextoPersonalizado from '../Text'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Botao({ texto }) {
    return (
        <TouchableOpacity style={estilos.botao} activeOpacity={0.7}>
            <TextoPersonalizado style={estilos.textoBotao}>{texto}</TextoPersonalizado>
        </TouchableOpacity >
    )
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 8,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26
    }
})
