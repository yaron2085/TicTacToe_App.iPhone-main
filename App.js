import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Statistics from './screens/Statistics';
import Game from './screens/Game';
import ResultModal from './screens/ResultModal';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Game Screen'>
        <Stack.Group>
          <Stack.Screen name='Game Screen' component={Game} />
          <Stack.Screen name='Statics Screen' component={Statistics} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name='Result Modal' component={ResultModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
