import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text, View} from 'react-native';
import Colors from '../assets/Colors';

export default function Splash() {
  return (
    <SafeAreaView style={styles.splashContainer}>
      <View>
        <Image style={styles.splashImg} source={require('../imgs/logo.png')} />
      </View>
      <View style={styles.bottomText}>
        <Text style={{fontSize: 21, color: Colors.P2}}>MADE IN</Text>
        <Text style={{fontSize: 21, color: Colors.P2, fontWeight: 'bold'}}>
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
    backgroundColor: Colors.P1,
    fontSize: 1,
  },

  splashImg: {
    resizeMode: 'contain',
    width: 246,
  },
  bottomText: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    bottom: 30,
  },
});
