import { Dimensions, StyleSheet } from "react-native";

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFA040',
    height: device.height / 3,
    width: device.width /2 -20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFA040',
    fontSize: 30,
  }
})