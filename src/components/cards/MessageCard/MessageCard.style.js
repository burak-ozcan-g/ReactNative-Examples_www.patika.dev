import { Dimensions, StyleSheet } from "react-native";

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#FFA040',
    height: 90,
    margin: 10,
  },
  info_container: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  date: {
    color: 'gray',
    alignContent: 'flex-end',
  },
  name: {
    color: 'black',
  },
  message: {
    margin: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  }
})