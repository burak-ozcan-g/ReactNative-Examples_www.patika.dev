/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Router from './src/Router';
import { name as appName } from './app.json';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => Router);