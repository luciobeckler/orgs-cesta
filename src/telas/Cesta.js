import React from 'react'
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
import TextoPersonalizado from '../components/Text/TextoPersonalizado'


const width = Dimensions.get('screen').width

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <TextoPersonalizado style={estilos.titulo}>Detalhes da cesta</TextoPersonalizado >
            <View style={estilos.cesta}>
                <TextoPersonalizado style={estilos.nome}>Cesta de Verduras</TextoPersonalizado>
                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagemFazenda} />
                    <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
                </View>
                <TextoPersonalizado style={estilos.descricao} >
                    Uma cesta com produtos selecionados cuidadosamente
                    da fazenda direto para a sua cozinha
                </TextoPersonalizado>
                <TextoPersonalizado style={estilos.preco}>R$40,00</TextoPersonalizado>
            </View>
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
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
    ,
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
