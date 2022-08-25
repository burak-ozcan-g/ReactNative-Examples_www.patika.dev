import React from "react";
import styles from './MessageCard.style'
import { View, Text } from 'react-native'

import { tr } from 'date-fns/locale'
import { formatDistance, parse, parseISO } from 'date-fns'

const RoomCard = ({ message }) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  })

  return (
    <View style={styles.container} >
      <View style={styles.info_container}>
        <Text style={styles.name}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text numberOfLines={1} style={styles.message}>{message.message}</Text>
    </View>
  )
}
export default RoomCard;