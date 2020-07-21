import React from 'react';
import Main from './components/Main';
import { NavigationContainer }from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ErrorBoundary } from './components/others/ErrorBoundary';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Hello from Navigation :)' component={Main}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  )
}