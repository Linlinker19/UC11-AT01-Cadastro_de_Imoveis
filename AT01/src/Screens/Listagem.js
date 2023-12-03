import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Database from '../Database/Database';
import ItemImovel from '../Components/ItemImovel';
import styles from './ListagemStyle';

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

    ApagarBanco = (id) => {
        const banco = new Database();
        banco.Deletar(id);
        this.ListarBanco();
    }

    render() {

        return (
            <ScrollView>
                <Text style={styles.headerText}> Imóveis Cadastrados </Text>
                <Text></Text>
                <View>
                    {
                        this.state.listaImoveis.map(
                            item => (
                                <ItemImovel
                                    key={item.id}
                                    id={item.id}
                                    tipo={item.tipo}
                                    endereco={item.endereco}
                                    finalidade={item.finalidade}
                                    valor={item.valor}
                                    imagem={item.imagem}
                                    excluir={this.ApagarBanco}

                                />

                            )
                        )
                    }
                </View>
            </ScrollView>
        )
    }


}