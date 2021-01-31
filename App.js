import React from 'react';
import Splash from './APP/screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Splash />
    </NavigationContainer>
  );
};

export default App;
