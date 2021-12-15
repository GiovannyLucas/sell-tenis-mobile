import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsPage } from '../screens/products';
import { ProductDetailsPage } from '../screens/productDetail';
import { MakeOrderPage } from '../screens/makeOrder';

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
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsPage}
        options={({ route }) => ({ id: route.params?.id, headerShown: false })}
      />
      <Stack.Screen
        name="MakeOrder"
        component={MakeOrderPage}
        options={({ route }) => ({
          product_id: route.params?.product_id,
          product_image_url: route.params?.product_image_url,
          product_amount: route.params?.product_amount,
          product_size: route.params?.product_size,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
