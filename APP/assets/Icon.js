import React from 'react';
import {Image} from 'react-native';

export default function Icon() {
  return (
    <Image
      style={{resizeMode: 'center', alignSelf: 'center', height: 40}}
      source={require('../assets/icon.png')}
    />
  );
}
