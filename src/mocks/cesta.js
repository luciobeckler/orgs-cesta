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
        descricao: "Nossa fazenda é como um pedacinho do paraíso rural, onde cultivamos com carinho uma seleção especial de produtos incríveis.Cada item é escolhido com atenção e colhido diretamente da terra para sua cozinha.Com a gente, você leva pra casa não só alimentos deliciosos, mas também a energia da natureza e o amor pelo que fazemos.É como ter um pedacinho da fazenda direto na sua mesa!",
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