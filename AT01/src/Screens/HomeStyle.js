import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        flex: 1, 
    },
    containerLogo: {
        height: '40%', 
        width: '90%', 
        flex: 1,
        alignSelf: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    imagemLogo: {
        width: '80%',
        resizeMode: 'contain',
        flex: 2, 
        alignSelf: 'center',
        
    },
    textoLogo: {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold', 
        alignSelf: 'center', 
        color: 'white', 
    },
    containerButtons: {
        flex: 2, 
    },
    buttons: {
        
        alignSelf: 'center',
        margin: 15,  
        width: '80%', 
        height: '15%', 
        backgroundColor: '#3399ff',
        borderRadius: 15, 
        justifyContent: 'center', 
        
    },
    buttonText: {
        fontSize: 18, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        alignContent: 'center', 
        fontWeight: '700',
        color: 'white', 
    }


  });

  export default styles ;