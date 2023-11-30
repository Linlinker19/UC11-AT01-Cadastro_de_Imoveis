import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Database from "../Database/Database";
import Imovel from "../Models/Imovel";

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tipo: 'Em Branco',
            endereco: 'Em Branco',
            finalidade: 'Em Branco',
            valor: 0,
            imagem: 'Nenhuma',            
        }
    }

    CadastrarBanco = (tipo, endereco, finalidade, valor, imagem) => {
        const banco = new Database();
        const imovel = new Imovel(null, tipo, endereco, finalidade, valor, imagem);
        banco.Inserir(imovel);
    }

    render() {

        return (
            <View>
                <Text> Cadastro de Imóveis</Text>
                <TextInput onChangeText={(valor) => {this.setState({tipo: valor})}} placeholder='Digite o tipo do imóvel...'></TextInput>
                <TextInput onChangeText={(valor) => {this.setState({endereco: valor})}} placeholder='Digite o Endereço...'></TextInput>
                <TextInput onChangeText={(valor) => {this.setState({finalidade: valor})}} placeholder='Digite a finalidade...'></TextInput>
                <TextInput onChangeText={(valor) => {this.setState({valor: valor})}} placeholder='Digite o valor...'></TextInput>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={
                        () => this.CadastrarBanco(this.state.tipo, this.state.endereco, this.state.finalidade, this.state.valor, this.state.imagem)
                    }> 
                        <Text style={{
                            backgroundColor: '#2ea630',
                            width: 150,
                            textAlign: 'center',
                            padding: 10,
                            margin: 5,
                            color: 'white',
                            borderRadius: 25,
                        }}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text> O imóvel será cadastrado com os seguintes dados:</Text>
                    <Text>Tipo: {this.state.tipo}</Text>
                    <Text>Endereço: {this.state.endereco}</Text>
                    <Text>Finalidade: {this.state.finalidade}</Text>
                    <Text>Valor: {this.state.valor}</Text>
                </View>

            </View>
        )
    }

}