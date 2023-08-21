import React from 'react'
import TextoPersonalizado from '../Text'
import { Image, StyleSheet, View } from 'react-native'

export default function Itens({ titulo, lista }) {
    return (
        <>
            <TextoPersonalizado style={estilos.titulo}>{titulo}</TextoPersonalizado>
            {lista.map(({ nome, imagem, id }) => {
                return (
                    <View style={estilos.item} key={id}>
                        <Image style={estilos.imagem} source={imagem} />
                        <TextoPersonalizado style={estilos.nome}>{nome}</TextoPersonalizado>
                    </View>
                )
            })}
        </>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16
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
