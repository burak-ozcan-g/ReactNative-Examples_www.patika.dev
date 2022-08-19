import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    image: {
        justifyContent: 'flex-end',
        width: '100%',
        height: 160,
    },
    textView: {
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        width: '100%',
        alignItems: 'flex-end',
    }
})