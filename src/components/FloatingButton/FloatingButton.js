import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from './FloatingButton.style'
import Icon from 'react-native-vector-icons/MaterialIcons'


const FloatingButton = ({ icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={icon} color='white' size={40} />
      </TouchableOpacity>
    </View>
  )
}
export default FloatingButton;