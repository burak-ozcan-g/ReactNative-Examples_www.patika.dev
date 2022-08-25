import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 10,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    height: deviceSize.height / 3,
  },
  input_container: {
    flex: 1,
    color: 'black'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  text: {
    color: 'black',
  }
})