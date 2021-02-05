import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import config from '../assets/config';

export default function GoogleBtn({btnTitle, ...rest}) {
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
            color: config.P2,
          },
        ]}>
        {btnTitle}
      </Text>
      <Image
        style={styles.googleIcon}
        source={require('../assets/googleIcon.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signIn: {
    flexDirection: 'row',
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

  googleIcon: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    marginLeft: 10,
  },
});
