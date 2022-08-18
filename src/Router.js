import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories'
import Meals from './pages/Meals'
import Details from './pages/Details'

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name='CategoriesPage' component={Categories} options={{
                    title: 'Categories', headerTintColor: '#FFA500', headerTitleAlign: 'center'
                }} />
                <Stack.Screen name='MealsPage' component={Meals} options={{
                    title: 'Meals', headerTintColor: '#FFA500', headerTitleAlign: 'center'
                }} />
                <Stack.Screen name='DetailsPage' component={Details} options={{
                    title: 'Details', headerTintColor: '#FFA500', headerTitleAlign: 'center'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;