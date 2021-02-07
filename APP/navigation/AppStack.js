import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import OffersScreen from '../screens/OffersScreen';
import WishlistScreen from '../screens/WishlistScreen';
import config from '../assets/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from '../assets/Icon';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function AppStack({navigation}) {
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
        name="HomeScreen"
        component={HomeScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
      <Stack.Screen
        name="OffersScreen"
        component={OffersScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
    </Stack.Navigator>
  );
}
