import React from "react";
import { View, Text, Pressable } from 'react-native'
import styles from './FavoritesCard.style'

const FavoritesCard = ({ job, onRemove }) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.name}> {job.name} </Text>
            <Text style={styles.type}> {job.type} </Text>
            <Text style={styles.location}> {job.locations[0].name} </Text>
            <Text style={styles.level}>{job.levels[0].name} </Text>
            <Pressable style={styles.rmv_button} onPress={onRemove}>
                <Text style={styles.btn_text}>Remove</Text>
            </Pressable>
        </View>
    )
}
export default FavoritesCard;