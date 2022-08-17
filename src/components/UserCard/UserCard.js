import React from "react";
import { View, Text } from 'react-native';

import styles from './UserCard.style'

const UserCard = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>{props.username}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.email}>{props.email}</Text>
            </View>
        </View>
    )
}
export default UserCard;

