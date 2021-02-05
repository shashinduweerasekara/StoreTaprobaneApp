import React from 'react';
import {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const ProfileScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>User ID: {user.uid}</Text>
      <Button title="LOG OUT" onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
