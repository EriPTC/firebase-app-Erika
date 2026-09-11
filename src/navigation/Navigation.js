import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Add from '../screens/Add';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{ presentation: 'modal', title: 'Agregar productos' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
