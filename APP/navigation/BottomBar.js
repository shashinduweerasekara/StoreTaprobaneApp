import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../assets/config';

import Home from '../screens/Home';
import Wishlist from '../screens/Wishlist';
import Cart from '../screens/Cart';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={config.P2}
      barStyle={{
        backgroundColor: config.P1,
        margin: 0,
        padding: 0,
        borderRadius: config.BR,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="heart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="bell" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-circle" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomBar;
