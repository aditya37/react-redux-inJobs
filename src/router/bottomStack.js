import React, {useState, useEffect} from 'react';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfileScreen} from '../screens';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#28ABB9',
        inactiveTintColor: '#4F4F4F',
        labelStyle: {
          color: '#000000',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => {
            return <Icon name="person" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
