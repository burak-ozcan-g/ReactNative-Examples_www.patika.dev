import React from "react";
import { TextInput, View } from "react-native";
import styles from './Input.stlye'

const Input = ({ placeholder, value, onType, isSecure }) => {
    return (
        <View style={styles.container} >
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
            >
            </TextInput>
            <View style={styles.sep} />
        </View>
    )
}

export default Input;