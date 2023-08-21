import uuid from 'react-native-uuid';

import logo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import batata from '../../assets/frutas/Batata.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'



const cesta = {
    topo: {
        titulo: "Detalhes da cesta"
    },
    detalhes: {
        titulo: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Janny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
                id: uuid.v4()
            },
            {
                nome: "Brocolis",
                imagem: brocolis,
                id: uuid.v4()
            },
            {
                nome: "Batata",
                imagem: batata,
                id: uuid.v4()
            },
            {
                nome: "Pepino",
                imagem: pepino,
                id: uuid.v4()
            },
            {
                nome: "Abóbora",
                imagem: abobora,
                id: uuid.v4()
            },


        ]
    }
}

export default cesta