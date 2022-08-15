import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Pressable, TextInput, FlatList } from 'react-native';
import ToDoCard from './components/ToDoCard';


function App() {
    const [input, setInput] = React.useState("");
    const [todoCounter, setTodoCounter] = React.useState(0);
    const [btnColor, setColor] = React.useState('#808080');
    const [todo_data, setToDo_Data] = React.useState([]);

    const [btnActive, setbtnActive] = React.useState(false);

    function onPress() {
        console.log(todo_data);
        todo_data.push({ text: input });
        console.log(todo_data);
        setInput("")
        setTodoCounter(todo_data.length)
    }

    useEffect(() => {
        if (input == "") {
            setbtnActive(false)
            setColor("#808080")
        } else {
            setbtnActive(true)
            setColor("#FFA500")
        }
    }, [input])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.counter_container}>
                <Text style={styles.counter_text}>Yapılacaklar</Text>
                <Text style={styles.counter_text}>{todoCounter}</Text>
            </View>
            <View style={styles.flat_container}>
                <FlatList
                    data={todo_data}
                    renderItem={({ item }) => <ToDoCard
                        todos={item} 
                    />}
                />
            </View>
            <View style={styles.input_container}>
                <TextInput style={styles.input_text}
                    placeholder="Yapılacak..."
                    placeholderTextColor="#808080"
                    value={input}
                    onChangeText={setInput}
                />
                <View style={styles.input_separator} />
                <Pressable
                    style={[styles.input_button, { backgroundColor: btnColor }]}
                    onPress={onPress}
                    disabled={!btnActive}
                >
                    <Text style={styles.input_button_text}>Kaydet</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: '#102027',
    },
    counter_container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    counter_text: {
        fontSize: 35,
        color: '#FFA500',
        fontWeight: 'bold',
    },
    input_container: {
        backgroundColor: '#37474F',
        alignContent: 'flex-end',
        padding: 15,
        borderRadius: 16,
    },
    input_button: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 12,
        margin: 10,
    },
    input_button_text: {
        fontSize: 20,
        color: 'white',
    },
    input_text: {
        fontSize: 20,
        color: 'white',
    },
    input_separator: {
        borderBottomColor: '#677D88',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    flat_container: {
        flex: 1,
    }


})

export default App;