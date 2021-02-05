import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Home Screen{user.uid}</Text>
      <Button title="LOG OUT" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
