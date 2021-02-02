import React from 'react';
import {View, Text, Button} from 'react-native';

function Profile(navigation) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I'm Profile</Text>
      <Button title="suck" />
    </View>
  );
}

export default Profile;
