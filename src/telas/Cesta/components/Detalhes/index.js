import React from 'react'
import TextoPersonalizado from '../../../../components/Text'
import { Image, StyleSheet, View } from 'react-native'


export default function Detalhes({ titulo, logoFazenda, nomeFazenda, descricao, preco }) {
    return (
        <>
            <TextoPersonalizado style={estilos.nome}>{titulo}</TextoPersonalizado>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda} />
                <TextoPersonalizado style={estilos.nomeFazenda}>{nomeFazenda}</TextoPersonalizado>
            </View>
            <TextoPersonalizado style={estilos.descricao} >
                {descricao}
            </TextoPersonalizado>
            <TextoPersonalizado style={estilos.preco}>{preco}</TextoPersonalizado>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    }
    ,
    imagemFazenda: {
        width: 32,
        height: 32,
        marginRight: 8
    }
    ,
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})
