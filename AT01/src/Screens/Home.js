import React, { Component } from "react"
import { View, Text, Button } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import Database from "../Database/Database";
import Imovel from "../Models/Imovel";


export default function Home({navigation}) {
        return (
            <View>
                <Text>Imóveis Baré</Text>
                <Button
                    title="Listagem"
                    onPress={() => navigation.navigate('Listagem')}
                />
                <Button
                    title="Cadastro"
                    onPress={() => navigation.navigate('Cadastro')}
                />
            </View>
        )
    }

