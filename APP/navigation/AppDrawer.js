import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import AppBottomTab from './AppBottomTab';
import ContactUsScreen from '../screens/ContactUsScreen';
import FAQScreen from '../screens/FAQScreen';
import config from '../assets/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from '../assets/Icon';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={AppBottomTab} />
      <Drawer.Screen name="Contact Us" component={ContactUsStack} />
      <Drawer.Screen name="FAQ" component={FAQScreen} />
    </Drawer.Navigator>
  );
}

function ContactUsStack({navigation}) {
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
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{headerTitle: (props) => <Icon {...props} />}}
      />
    </Stack.Navigator>
  );
}
