import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import config from '../assets/config';

export default function FormSecondaryBtn({btnTitle, ...rest}) {
  return (
    <TouchableOpacity
      style={[
        styles.signIn,
        {
          borderColor: config.P2,
          borderWidth: 1,
          marginTop: 15,
        },
      ]}
      {...rest}>
      <Text
        style={[
          styles.textSign,
          {
            color: config.P1,
          },
        ]}>
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: config.BR,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
