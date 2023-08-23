import React from 'react'
import TextoPersonalizado from '../Text'
import { Image, StyleSheet, View } from 'react-native'

export default function Item({ item: { nome, imagem, id } }) {
    return <View style={estilos.item}>
        <Image style={estilos.imagem} source={imagem} />
        <TextoPersonalizado style={estilos.nome}>{nome}</TextoPersonalizado>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 16,
        color: '#464646'
    }
})
