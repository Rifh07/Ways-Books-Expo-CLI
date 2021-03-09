import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import HomeScreen from '../Pages/HomeScreen';
import ProfileScreen from '../Pages/ProfileScreen';

const Tab = createBottomTabNavigator();

const Router = () => (
    <NavigationContainer>
        <Tab.Navigator style={styles.navigation}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    navigation: {
      paddingBottom: 50
    },
});

export default Router