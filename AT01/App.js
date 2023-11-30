import React, { Component } from "react"
import { View, Text } from 'react-native'
import Database from "./src/Database/Database";
import Imovel from "./src/Models/Imovel";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listaImoveis: []
    }
   /*  this.CadastrarBanco('Casa', 'Rua dos Bobos', 'Venda', 185000, 'https://th.bing.com/th/id/R.51d450bd1e8c72519b091a3864466e23?rik=%2bLFF2RCk2PxBuA&riu=http%3a%2f%2fconstruyehogar.com%2fwp-content%2fuploads%2f2014%2f05%2fFachada-de-casa-de-piedra-de-un-piso.jpg&ehk=qbkpK2oxTt0wpGG%2batEXkr93SseWCclCOJ9iYbuuIEw%3d&risl=&pid=ImgRaw&r=0') */
    this.ListarBanco()
    
  }

ListarBanco = () => {
  const banco = new Database();
  banco.Listar().then( lista => {this.setState({listaImoveis: lista})})
}

CadastrarBanco = (tipo, endereco, finalidade, valor, imagem) => {
  const banco = new Database();
  const imovel = new Imovel(tipo, endereco, finalidade, valor, imagem); 
  banco.Inserir(imovel);
}

  render() {

    return (
      <View>
        <Text> Hello Negada! </Text>
        {
          this.state.listaImoveis.map(
            item => (
              <Text>{item.tipo} 
              {item.endereco}
              {item.finalidade} 
              {item.valor}
              {item.imagem} 
              </Text>
            )
          )
        }
      </View>
    )
  }

}