import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '@containers/ProductList';
import Product from '@containers/Product';
import Basket from '@containers/Basket';
import BasketCount from '@containers/BasketCount';
import AuditLog from '@components/AuditLog';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={({ navigation, route }: ContainerProps) => ({
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <BasketCount navigation={navigation} route={route} />
        ),
      })}
    >
      <Stack.Screen name="Product List" component={ProductList} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>

    <AuditLog />
  </NavigationContainer>
);

export default Routes;
