import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#FFA040',
        },
        title: {
            ...base_style.title,
            color: '#FFFFFF',
        }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#FFC993'
        },
        title: {
            ...base_style.title,
            color: '#FFA040',
        }
    }),
}