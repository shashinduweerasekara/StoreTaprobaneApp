import React from 'react';
import {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const ProfileScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text>User Email:{user.email}</Text>
          <Button title="Sign Out" onPress={() => logout()} />
        </View>
      ) : (
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('SignInScreen')}
        />
      )}
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
