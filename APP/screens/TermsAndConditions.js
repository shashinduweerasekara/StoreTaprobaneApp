import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TopBar from '../commonComponents/TopBar';

export default function TermsAndConditions() {
  return (
    <SafeAreaView style={{flex: 1, height: '100%'}}>
      <TopBar />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>I'm Terms and Conditions</Text>
      </View>
    </SafeAreaView>
  );
}
