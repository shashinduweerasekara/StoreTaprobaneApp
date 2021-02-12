import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../assets/config';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from '../assets/Icon';

import AppStack from '../navigation/AppStack';
import WishlistScreen from '../screens/WishlistScreen';
import CartScreen from '../screens/CartScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppBottomTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor={config.P2}
      barStyle={{
        backgroundColor: config.P1,
        margin: 0,
        padding: 0,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={AppStack}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="WishlistStack"
        component={WishlistStack}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="heart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsStack"
        component={NotificationsStack}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="bell" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-circle" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function CartStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: config.P1,
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableWithoutFeedback
            style={{marginLeft: 10}}
            onPress={() => navigation.openDrawer()}>
            <FontAwesome5
              name="bars"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
        headerRight: () => (
          <TouchableWithoutFeedback
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('OffersScreen')}>
            <FontAwesome5
              name="tags"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
      }}>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
    </Stack.Navigator>
  );
}

function WishlistStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: config.P1,
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableWithoutFeedback
            style={{marginLeft: 10}}
            onPress={() => navigation.openDrawer()}>
            <FontAwesome5
              name="bars"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
        headerRight: () => (
          <TouchableWithoutFeedback
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('OffersScreen')}>
            <FontAwesome5
              name="tags"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
      }}>
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
    </Stack.Navigator>
  );
}

function NotificationsStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: config.P1,
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableWithoutFeedback
            style={{marginLeft: 10}}
            onPress={() => navigation.openDrawer()}>
            <FontAwesome5
              name="bars"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
        headerRight: () => (
          <TouchableWithoutFeedback
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('OffersScreen')}>
            <FontAwesome5
              name="tags"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
      }}>
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: config.P1,
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableWithoutFeedback
            style={{marginLeft: 10}}
            onPress={() => navigation.openDrawer()}>
            <FontAwesome5
              name="bars"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
        headerRight: () => (
          <TouchableWithoutFeedback
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('OffersScreen')}>
            <FontAwesome5
              name="tags"
              size={25}
              color={config.P2}
              backgroundColor={config.P1}
            />
          </TouchableWithoutFeedback>
        ),
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
    </Stack.Navigator>
  );
}
