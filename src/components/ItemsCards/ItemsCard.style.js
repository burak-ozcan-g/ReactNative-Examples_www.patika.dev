import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECEFF1',
        margin: 5,
        padding: 10,     
        borderRadius: 4,
    },
    image: {
        height: Dimensions.get('window').height / 4,
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    price: {
        color: '#808080',
        fontSize: 16,
    }
})