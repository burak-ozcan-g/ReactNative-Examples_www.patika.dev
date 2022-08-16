import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

function First(props){
    console.log(props)
    function navigateToSecondPage(){
        props.navigation.navigate('SecondScreen', {username: 'burakozcan'});
    }

    return(
        <SafeAreaView>
            <Text>Hello First</Text>
            <Button title="Go to Second" onPress={navigateToSecondPage}/>
        </SafeAreaView>
    )
}

export default First;