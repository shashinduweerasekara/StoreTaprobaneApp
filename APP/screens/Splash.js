import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text, View} from 'react-native';
import config from '../assets/config';

export default function Splash() {
  return (
    <SafeAreaView style={styles.splashContainer}>
      <View>
        <Image style={styles.splashImg} source={require('../imgs/logo.png')} />
      </View>
      <View style={styles.bottomText}>
        <Text style={{fontSize: 21, color: config.P2}}>MADE IN</Text>
        <Text style={{fontSize: 21, color: config.P2, fontWeight: 'bold'}}>
          SRI LANKA
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.P1,
    fontSize: 1,
  },

  splashImg: {
    resizeMode: 'contain',
    height: 111,
  },
  bottomText: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    bottom: 30,
  },
});
