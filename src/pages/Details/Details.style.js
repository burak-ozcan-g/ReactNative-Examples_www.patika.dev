import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 2,
    },
    title_view: {
        height: '20%',
    },
    name: {
        color: '#37474F',
        fontWeight: 'bold',
        fontSize: 30,
    },
    desc_view: {
        flexDirection: 'row',
    },
    desc_title: {
        color: '#EF5451',
        fontWeight: 'bold',
        fontSize: 15,
    },
    desc: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    detail_title: {
        margin: 5,
        color: '#37474F',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    html: {
        color: 'black',
        fontSize: 15,
    },
    html_view: {
        height: '68%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },
    button:{
        padding: 10,
        flex: 0.45,
        backgroundColor: '#EF5451',
        borderRadius: 10,
        alignItems: 'center',
    },
    button_text: { 
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',      
    },
    buttons_view: {
        height: '12%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})