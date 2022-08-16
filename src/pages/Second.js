import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

function Second(props){
    console.log(props)

    const username = props.route.params.username;

    function goBackFirst(){
        props.navigation.goBack()
    }

    return(
        <SafeAreaView>
            <Text>Hello Second</Text>
            <Button title="Go Back" onPress={goBackFirst}/>
            <Text>{username}</Text>
        </SafeAreaView>
    )
}

export default Second;