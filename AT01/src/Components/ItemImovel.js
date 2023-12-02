import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet, Dimensions } from "react-native";

export default class ItemImovel extends Component {

    styles = StyleSheet.create({
        ItemContainer: {
            padding: 10,
            margin: 5,
            backgroundColor: '#d9d9d9',
            flexDirection: 'row',
            borderRadius: 20,

            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            flex: 1,
        },
        textContainer: {
            flex: 2,
            paddingLeft: 5,
        },
        thumbnail: {
            width: 120,
            height: 100,
            resizeMode: 'cover',
        },
        touchableContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: '100%',
            flexDirection: 'column',
            maxHeight: '100%',

        },
        touchableText: {
            color: 'black',
            textAlign: 'center',

        },
        touchableButtons: {
            flex: 1,
            maxHeight: '40%',
            borderRadius: 15,
            minWidth: '90%',
            backgroundColor: '#ff8080',
            alignContent: 'center',
            justifyContent: 'center',
            margin: 5,

        },
    })

    verificarExcluir() {
        if(this.props.excluir) {
            return (
                <View style={this.styles.touchableContainer}>
                <TouchableOpacity 
                style={this.styles.touchableButtons}
                onPress={ () => {this.props.excluir(this.props.id)}}
                >
                    <Text style={this.styles.touchableText}>Apagar</Text>
                </TouchableOpacity>
                
            </View>

            )
        }
    }

    render() {
        return (
            <View style={this.styles.ItemContainer}>
                <View style={this.styles.ImageContainer}>
                    <Image
                        style={this.styles.thumbnail}
                        source={{ uri: 'https://th.bing.com/th/id/OIP.HGbujKai-mMxWt5SgAERwwHaFj?rs=1&pid=ImgDetMain' }}>
                    </Image>
                </View>

                <View style={this.styles.textContainer}>
                    <Text>Id: {this.props.id} </Text>
                    <Text>Tipo: {this.props.tipo} </Text>
                    <Text>Endereço: {this.props.endereco} </Text>
                    <Text>Finalidade: {this.props.finalidade} </Text>
                    <Text>Valor: R$ {this.props.valor} </Text>
                    <Text>Imagem: {this.props.imagem} </Text>
                </View>

               {this.verificarExcluir()}


                <Text> </Text>
            </View>
        )
    }

}