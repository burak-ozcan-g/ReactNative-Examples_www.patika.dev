import React from "react";
import { View, TextInput } from 'react-native'
import styles from './ContentInputModal.style'

import Modal from 'react-native-modal'
import Button from '../../Button'

const ContentInputModal = ({ placeholder, buttonText, visible, onClose, onSend }) => {
  const [text, setText] = React.useState(null)

  function handleSend() {
    if (!text) {
      return;
    }

    onSend(text);
    setText(null)
  }

  return (
    <Modal style={styles.modal}
      isVisible={visible}
      swipeDirection='down'
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={setText} 
            multiline
            style={styles.text}
            placeholderTextColor={'gray'} />
        </View>
        <Button text={buttonText} onPress={handleSend} />
      </View>
    </Modal>
  )
}

export default ContentInputModal;