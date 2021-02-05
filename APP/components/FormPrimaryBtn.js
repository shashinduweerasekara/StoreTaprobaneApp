import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import config from '../assets/config';

export default function FormPrimaryBtn({btnTitle, ...rest}) {
  return (
    <TouchableOpacity style={styles.signIn} {...rest}>
      <LinearGradient colors={[config.P2, config.S4]} style={styles.signIn}>
        <Text
          style={[
            styles.textSign,
            {
              color: config.P1,
            },
          ]}>
          {btnTitle}
        </Text>
      </LinearGradient>
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
