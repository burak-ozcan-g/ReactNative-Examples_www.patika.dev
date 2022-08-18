import React from "react";
import { View, Image, Text, Pressable } from 'react-native';
import Meals from "../../pages/Meals/Meals";
import styles from './DetailsCard.style'

const DetailsCard = ({ details , onSelect}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: details.strMealThumb }}
            />
            <Text style={styles.name}> {details.strMeal} </Text>
            <Text style={styles.area_name}> {details.strArea} </Text>
            <Text style={styles.desc}> {details.strInstructions} </Text>
            <Pressable style={styles.button} onPress={onSelect}>
                <Text style={styles.button_text}> Watch On Youtube </Text>
            </Pressable>
        </View>
    )
}
export default DetailsCard;