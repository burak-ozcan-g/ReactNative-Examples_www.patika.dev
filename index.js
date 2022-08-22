/**
 * @format
 */

 import { AppRegistry } from 'react-native';
 import Router from './src/Router';
 import { name as appName } from './app.json';
 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import {ViewPropTypes} from 'deprecated-react-native-prop-types';
 
 export default function App() {
     return (
         <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
     );
 }
 
 AppRegistry.registerComponent(appName, () => Router);