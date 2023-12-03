import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6f2ff',
        width: "70%",
        alignSelf: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        margin: 4,
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 2,
        borderColor: 'white',
        height: 60,
        margin: 4,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#b3d9ff',
    },


    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 400,
        width: 200,
    },
    capture: {
        flex: 0,
        backgroundColor: '#b3d9ff',
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
    containerCadastro: {
        flex: 1,
    },
    cadastrarButton: {
        backgroundColor: '#00cc00',
        width: 200,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
    }
});

export default styles;