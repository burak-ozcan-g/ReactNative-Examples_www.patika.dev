import React from "react";
import { Text, View } from 'react-native'
import styles from './DetailsCard.style'

const DetailsCard = ({ details, onSelect }) => {
    return (
        <View stlye={styles.container}>
            <Text style={styles.name}> {details} </Text>
        </View>
    )
}

export default DetailsCard;