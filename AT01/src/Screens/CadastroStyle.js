import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#b3ffb3',
      width: "60%",
      alignSelf: 'center',
      padding: 5,
      borderRadius: 10,
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 300,
      width: 150,
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    scrollview: {
        flex: 1,
        flexDirection: 'column',
    },
    containerCadastro:{
        flex: 1,
    }
  });

  export default styles ;