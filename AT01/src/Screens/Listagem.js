import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Database from '../Database/Database';

export default class Listagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaImoveis: []
        }

        this.ListarBanco()

    }

    ListarBanco = () => {
        const banco = new Database();
        banco.Listar().then(lista => { this.setState({ listaImoveis: lista }) })
    }

    render() {

        return (
            <View>
                <Text> Hello Negada! </Text>
                {
                    this.state.listaImoveis.map(
                        item => (
                            <Text>
                                ID: {item.id} 
                                Tipo: {item.tipo}
                                Endereço: {item.endereco}
                                Finalidade: {item.finalidade}
                                Valor: {item.valor}
                                Imagem: {item.imagem}
                            </Text>
                        )
                    )
                }
            </View>
        )
    }


}