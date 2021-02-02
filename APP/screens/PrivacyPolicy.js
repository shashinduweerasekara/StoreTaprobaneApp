import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TopBar from '../commonComponents/TopBar';

export default function PrivacyPolicy() {
  return (
    <SafeAreaView style={{flex: 1, height: '100%'}}>
      <TopBar />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>I'm Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
}
