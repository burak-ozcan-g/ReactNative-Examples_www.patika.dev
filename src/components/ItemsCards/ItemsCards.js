import React from "react";
import { View, Image, Text } from 'react-native';
import styles from './ItemsCard.style';

const ItemsCard = ({ items }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: items.imgURL }} />
            <Text style={styles.title}>{items.title}</Text>
            <Text style={styles.price}>{items.price}</Text>
        </View>
    )
}
export default ItemsCard;