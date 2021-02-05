import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../assets/config';

import AppStack from '../navigation/AppStack';
import WishlistScreen from '../screens/WishlistScreen';
import CartScreen from '../screens/CartScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export default function AppBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={config.P2}
      barStyle={{
        backgroundColor: config.P1,
        margin: 0,
        padding: 0,
        borderRadius: config.BR,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={AppStack}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="heart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="bell" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-circle" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
