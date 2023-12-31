import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Database from "../Database/Database";
import Imovel from "../Models/Imovel";
import ItemImovel from "../Components/ItemImovel";
import { RNCamera } from "react-native-camera";
import styles from "./CadastroStyle";

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tipo: 'Em Branco',
            endereco: 'Em Branco',
            finalidade: 'Em Branco',
            valor: 0,
            imagem: 'nenhuma',
        }
    }

    CadastrarBanco = (tipo, endereco, finalidade, valor, imagem) => {
        const banco = new Database();
        const imovel = new Imovel(null, tipo, endereco, finalidade, valor, imagem);
        banco.Inserir(imovel);
        alert('Cadastro realizado.')
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.7, base64: true, width: 640 };
            const data = await this.camera.takePictureAsync(options);
            this.setState({ imagem: data.uri });
            console.log(data.uri);

        }
    };


    render() {

        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.containerCadastro}>
                    <Text style={styles.headerText}> Cadastro de Imóveis</Text>
                    <TextInput style={styles.textInput} onChangeText={(valor) => { this.setState({ tipo: valor }) }} placeholder='Digite o tipo do imóvel...'></TextInput>
                    <TextInput style={styles.textInput} onChangeText={(valor) => { this.setState({ endereco: valor }) }} placeholder='Digite o Endereço...'></TextInput>
                    <TextInput style={styles.textInput} onChangeText={(valor) => { this.setState({ finalidade: valor }) }} placeholder='Digite a finalidade...'></TextInput>
                    <TextInput style={styles.textInput} onChangeText={(valor) => { this.setState({ valor: valor }) }} placeholder='Digite o valor...'></TextInput>
                </View>

                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            console.log(barcodes);
                        }}
                    />
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                            <Text style={{ fontSize: 14 }}> Fotografar </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text> O imóvel será cadastrado com os seguintes dados:</Text>
                    <ItemImovel
                        tipo={this.state.tipo}
                        endereco={this.state.endereco}
                        finalidade={this.state.finalidade}
                        valor={this.state.valor}
                        imagem={this.state.imagem}
                    />
                </View>
                
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity 
                        onPress={
                        () => this.CadastrarBanco(this.state.tipo, this.state.endereco, this.state.finalidade, this.state.valor, this.state.imagem)} 
                        style={styles.cadastrarButton}>
                        <Text style={styles.textoCadastrar}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }

}