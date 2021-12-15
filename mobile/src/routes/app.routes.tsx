import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsPage } from '../screens/products';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#3E4D9D' },
        contentStyle: { backgroundColor: '#FFF' },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Home"
        component={ProductsPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
