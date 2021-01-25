import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../assets/config';

export default function CloseBtn() {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 15,
      }}>
      <FontAwesome5
        name={'times'}
        style={{
          fontSize: 30,
          color: config.P2,
        }}
      />
    </TouchableOpacity>
  );
}
