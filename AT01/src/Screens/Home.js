import React, { Component } from "react"
import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Database from "../Database/Database";
import Imovel from "../Models/Imovel";
import styles from "./HomeStyle";


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Image source={require('../Images/Logo.png')} style={styles.imagemLogo} />
                <Text style={styles.textoLogo}> Baré Imóveis </Text>
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity
                    style={styles.buttons}
                    title="Listagem"
                    onPress={() => navigation.navigate('Listagem')}
                >
                    <Text style={styles.buttonText}> Listar Imóvies </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.buttonText}> Cadastrar Imóveis </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

