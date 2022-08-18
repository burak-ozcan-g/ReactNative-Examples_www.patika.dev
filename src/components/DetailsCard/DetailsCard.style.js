import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        padding: 5
    },
    image: {
        height: 250,
    },
    name: {
        fontSize: 28,
        color: '#A52A2A',
        fontWeight: 'bold'
    },
    area_name: {
        fontSize: 16,
        color: '#A52A2A',
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14,
        color: 'black',
    },
    button: {
        backgroundColor: '#FF0000',
        borderRadius: 12,
        alignItems: 'center',
        padding: 10,
        margin: 5,
    },
    button_text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    }
})