import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import Icon from 'react-native-vector-icons/MaterialIcons'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Room from './pages/Room'
import { TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator();

function Router() {
    const [userSession, setUserSession] = useState()

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setUserSession(!!user);
        })
    }, [])

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='LoginPage' component={Login} />
                <Stack.Screen name='RegisterPage' component={Register} />
            </Stack.Navigator>
        )
    }
    const RoomStack = () => {
        return (
            <Stack.Navigator screenOptions={{
                headerTintColor: '#FFA040',
                headerTitleAlign: 'center',
                headerRight: () =>
                    <Icon
                        name='logout'
                        size={30}
                        color='#FFA040'
                        onPress={() => auth().signOut()}
                    />
            }}>
                <Stack.Screen name='HomePage' component={Home} options={{ headerTitle: 'Odalar' }} />
                <Stack.Screen name='RoomPage' component={Room} options={({ route }) => ({
                    title: route.params.item.name,
                })} />
            </Stack.Navigator >
        )
    }

    return (
        <NavigationContainer>
            {!userSession ? (
                AuthStack()
            ) : (
                RoomStack()
            )}
            <FlashMessage position="top" />
        </NavigationContainer>
    )
}

export default Router;