import React from 'react';
import { TextInput, FlatList, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import items_data from './items_list.json';
import ItemsCard from './components/ItemsCards';


function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.header_title}>PATIKASTORE</Text>
            <View style={styles.input_view}>
                <TextInput style={styles.input_text} placeholder="Ara..." />
            </View>
            <FlatList
                numColumns={2}
                data={items_data}
                renderItem={({ item }) => <ItemsCard items={item} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
    },
    header_title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        color: '#800080',
    },
    input_view: {
        backgroundColor: '#ECEFF1',
        borderRadius: 15,
        padding: 5,
        margin: 5,
    },
    input_text: {
        marginStart: 5,
        fontSize: 16,
    }


})
export default App;