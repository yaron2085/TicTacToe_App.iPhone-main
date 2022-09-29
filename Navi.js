const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Game Screen' component={Game} />
      <MainStack.Screen name='Statics Screen' component={Statistics} />
    </MainStack.Navigator>
  );
}
const Stack = createNativeStackNavigator();

return (
  <NavigationContainer>
    <Stack.Navigator mode='modal' headerMode='none'>
      <Stack.Screen name='Result Modal' component={ResultModal} />
      <Stack.Screen name='Main' componant={MainStackScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
