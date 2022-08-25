import React from "react";
import styles from './RoomCard.style'
import { Text, TouchableOpacity } from 'react-native'

const RoomCard = ({ room, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{room.name}</Text>
    </TouchableOpacity>
  )
}
export default RoomCard;