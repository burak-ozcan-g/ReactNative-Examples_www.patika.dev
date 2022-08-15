import React, { useEffect, useState } from "react";
import { View, Pressable, Text } from 'react-native';
import styles from './ToDoCard.style';

const ToDoCard = (props) => {
    const [text_deco, setText_deco] = React.useState("");
    const [card_color, setCard_color] = React.useState('#7DA453');

    function onPressCard() {
        console.log("evet")
        if (card_color == "#7DA453") {
            setCard_color("#37474F")
            setText_deco("line-through")
        } else {
            setCard_color("#7DA453")
            setText_deco("")
        }
    }

    return (
        <View style={styles.container}>
            <Pressable
                backgroundColor={card_color}
                style={styles.card}
                onPress={onPressCard} 
            >
                <Text
                    style={[styles.text, { textDecorationLine: text_deco }]}>
                    {props.todos.text}
                </Text>
            </Pressable>
        </View>
    )
}
export default ToDoCard;