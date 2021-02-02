import React from 'react';
import {View, Text, Button} from 'react-native';
import TopBar from '../commonComponents/TopBar';

export default function FAQ({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I'm FAQ</Text>
      <Button title="fuck" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
