import React from "react";
import { View, Image, Text, Pressable } from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({ categories, onSelect }) => {
    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: categories.strCategoryThumb }}
                />
                <Text style={styles.name}> {categories.strCategory} </Text>
            </View>
        </Pressable>
    )
}
export default CategoriesCard;