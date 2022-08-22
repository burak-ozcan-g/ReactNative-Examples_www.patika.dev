import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: 150,
        margin: 10,
        borderColor: '#C1C1C1',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    type: {
        color: 'black',
    },
    location: {
        alignSelf: 'flex-start',
        borderRadius: 20,
        backgroundColor: '#EF5350',
        color: 'white',
        padding: 2,
    },
    level: {
        color: '#F37E7C',
        alignSelf: 'flex-end',
    },
    rmv_button: {
        margin: 10,
        backgroundColor: '#EF5350',
        borderRadius: 5,
        alignItems: 'center',
    },
    btn_text:{
        padding: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignContent: 'center',
    }
})