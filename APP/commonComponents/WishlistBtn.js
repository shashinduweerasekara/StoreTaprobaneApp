import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../assets/config';

export default function WishlistBtn() {
  return (
    <View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => console.log('WishlistBtn')}>
        <FontAwesome5 name={'heart'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  icon: {
    fontSize: 30,
    color: config.P2,
    marginTop: 5,
    marginLeft: 5,
  },
});
