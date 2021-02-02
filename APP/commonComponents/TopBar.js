import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import config from '../assets/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TopBar({navigation}) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity>
        <FontAwesome5
          style={styles.topBarNavIcon}
          name={'bars'}
          onPress={() => console.log('side menu')}
        />
      </TouchableOpacity>
      <Image style={styles.topBarIcon} source={require('../imgs/icon.png')} />
      <TouchableOpacity>
        <FontAwesome5
          style={styles.topBarNavIcon}
          name={'tags'}
          onPress={() => navigation.navigate('Offers')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: config.P1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  topBarIcon: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

  topBarNavIcon: {
    fontSize: 25,
    color: config.P2,
  },
});
