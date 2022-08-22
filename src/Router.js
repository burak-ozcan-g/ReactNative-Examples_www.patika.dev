import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Works from './pages/Works';
import Details from './pages/Details'
import Favorites from './pages/Favorites'

import { Provider } from 'react-redux';
import { store } from './context/FavoriteProvider/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const WorksStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='WorksPage'
            screenOptions={{ headerTintColor: '#FF5C58', headerTitleAlign: 'center' }}
        >
            <Stack.Screen name="WorksPage" component={Works}
                options={{ title: 'Jobs' }} />
            <Stack.Screen name="DetailsPage" component={Details}
                options={({ route }) => ({ title: route.params.name })} />
        </Stack.Navigator>
    )
}

function Router() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='WorksStack'
                    screenOptions={{ headerShown: false, drawerActiveTintColor: '#FF5C58' }}
                >
                    <Drawer.Screen name="WorksStack" component={WorksStack} />
                    <Drawer.Screen name="FavoritesPage" component={Favorites} />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Router;