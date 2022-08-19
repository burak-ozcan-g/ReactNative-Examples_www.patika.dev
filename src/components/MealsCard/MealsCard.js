import React from "react";
import { View, Pressable, Text, ImageBackground } from 'react-native'
import styles from './MealsCard.style'

const MealsCard = ({ meals, onSelect }) => {
    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    source={{ uri: meals.strMealThumb }}
                >
                    <View style={styles.textView}>
                        <Text numberOfLines={1} style={styles.text}> {meals.strMeal} </Text>
                    </View>
                </ImageBackground>
            </View>
        </Pressable>
    )
}

export default MealsCard;