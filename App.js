import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from './components/TelaHome/Index';
import TelaNBA from './components/TelaNBA/Index';
import TelaFutebolBrasileiro from './components/TelaFutebolBrasileiro/Index';
import TelaElencos from './components/TelaElencos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaHome">
        <Stack.Screen name="TelaHome" component={TelaHome} />
        <Stack.Screen name="TelaNBA" component={TelaNBA} />
        <Stack.Screen name="TelaElencos" component={TelaElencos} />
        <Stack.Screen name="TelaFutebolBrasileiro" component={TelaFutebolBrasileiro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;