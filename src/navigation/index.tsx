import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './types';
import {HomeScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootStackParamList>();

export function NavigationHome() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            return (
              <Ionicons name={iconName as string} size={size} color={color} />
            );
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Messages" component={HomeScreen} />
        <Tab.Screen name="Location" component={HomeScreen} />
        <Tab.Screen name="User" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
