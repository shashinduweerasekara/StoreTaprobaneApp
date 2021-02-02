import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUp from './APP/screens/SignUp';
import Login from './APP/screens/Login';
import Home from './APP/screens/Home';

const ManinStack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <ManinStack.Navigator headerMode={false}>
        <ManinStack.Screen name="SignUp" component={SignUp} />
        <ManinStack.Screen name="Login" component={Login} />
        <ManinStack.Screen name="Home" component={Home} />
      </ManinStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
