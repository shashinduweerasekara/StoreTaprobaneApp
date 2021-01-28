import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function Logo() {
  return (
    <View>
      <Image style={styles.Logo} source={require('../imgs/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    resizeMode: 'contain',
    width: 148,
    height: 66,
  },
});
