import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        margin: 5,
        padding: 5,
    },
    email: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'gray',
        marginLeft: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    inner_container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})