import React from "react";
import { Pressable, View, Text } from 'react-native'
import styles from './JobsCard.style'

const JobsCard = ({ jobs, onSelect }) => {
    return (
        <Pressable onPress={onSelect}>
            <View style={styles.container}>
                <Text numberOfLines={1} style={styles.name}> {jobs.name} </Text>
                <Text style={styles.type}> {jobs.type} </Text>
                <Text style={styles.location}> {jobs.locations[0].name} </Text>
                <Text style={styles.level}>{jobs.levels[0].name} </Text>
            </View>
        </Pressable>
    )
}
export default JobsCard;