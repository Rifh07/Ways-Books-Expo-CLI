import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import HomeScreen from './src/Pages/HomeScreen';
import Detail from './src/Pages/Detail';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Books" }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: "Detail Book" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
