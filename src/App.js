import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from './components/Card'

function App() {
  function sayHello() {
    console.log("Merhaba!")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" text="Winter is Coming." />
      <Card title="Arif Işık" text="Evet tarafından." />
      <Card title="Serbest" text="Ben neredeyim?" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a096ff',
    padding: 10,
    borderRadius: 5,
  },
})

export default App;