import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#ECEFF1',
        margin: 5,
        height: 72,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: 'center',
    },
    name: {
        fontSize: 25,
        color: 'black',
        marginLeft: 10,
    },
    image: {
        width: 70,
        height: 50,
        marginLeft: 20,
        resizeMode: 'contain',
    }
})