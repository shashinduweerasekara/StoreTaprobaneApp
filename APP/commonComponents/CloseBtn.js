import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../assets/config';

export default function CloseBtn({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Home')}>
        <FontAwesome5 name={'times'} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  icon: {
    fontSize: 30,
    color: config.P2,
    marginTop: 5,
    marginRight: 5,
  },
});
