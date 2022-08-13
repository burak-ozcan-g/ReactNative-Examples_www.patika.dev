import React from "react";
import styles from './Card.style';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const Card = (props) => {
    function sayLike(){
        Alert.alert("Beğendim "+ props.title)
    }

    return (
        <View style={styles.container}>
            <View  style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.button_container} onPress={sayLike}>
                <Text style={styles.button_title}>I LIKED</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Card;