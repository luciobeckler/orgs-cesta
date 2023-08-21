import React from 'react'
import { StyleSheet, View } from 'react-native'

import Topo from './components/Topo'
import Detalhes from './components/Detalhes'
import Itens from './components/itens/itens'
import cesta from '../../mocks/cesta'

export default function Cesta({ topo, detalhes, itens }) {
    return (
        <>
            <Topo {...topo} />
            <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Itens {...itens} />
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }

})
