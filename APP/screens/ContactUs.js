import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import config from '../assets/config';
import TopBar from '../commonComponents/TopBar';

export default function ContactUs() {
  return (
    <SafeAreaView style={styles.contactUsScreen}>
      <TopBar />
      <ScrollView style={styles.contactUsContainer}>
        <View>
          <Text style={styles.contactUsTitle}>Contact Us</Text>
          <Text style={styles.contactUsDescription}>
            Feel free to contact us. Our agent will be back to you within 48
            hours.
          </Text>
          <View style={styles.contactUsForm}>
            <Text>Name *</Text>
            <TextInput
              style={styles.contactUsInput}
              autoCompleteType="name"
              placeholder="eg: Saman Edirimunee"></TextInput>
            <Text>Mobile No. *</Text>
            <TextInput
              style={styles.contactUsInput}
              autoCompleteType="tel"
              placeholder="eg: +44123456789"></TextInput>
            <Text>Email *</Text>
            <TextInput
              style={styles.contactUsInput}
              autoCompleteType="email"
              placeholder="eg: saman@secondinning.com"></TextInput>
            <Text>Message *</Text>
            <TextInput
              style={styles.contactUsInputArea}
              placeholder="Enter your message here..."></TextInput>
          </View>
          <TouchableOpacity
            style={styles.sendBtn}
            onPress={() => console.log('login')}>
            <Text style={styles.sendBtnTxt}>SEND</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contactUsScreen: {
    backgroundColor: config.P1,
    height: '100%',
  },

  contactUsContainer: {
    backgroundColor: config.W,
    borderTopRightRadius: config.BR,
    borderTopLeftRadius: config.BR,
  },

  contactUsTitle: {
    fontSize: 34,
    color: config.P2,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  contactUsDescription: {
    fontSize: 21,
    color: config.P2,
    textAlign: 'center',
  },

  contactUsForm: {
    alignSelf: 'center',
    marginTop: 20,
  },

  contactUsInput: {
    fontSize: 21,
    width: 300,
    height: 50,
    borderColor: config.P2,
    borderWidth: 1,
    borderRadius: config.BR,
    paddingLeft: 10,
    marginBottom: 10,
  },

  contactUsInputArea: {
    fontSize: 21,
    width: 300,
    height: 100,
    borderColor: config.P2,
    borderWidth: 1,
    borderRadius: config.BR,
    paddingLeft: 10,
    marginBottom: 10,
  },

  sendBtn: {
    width: 180,
    height: 50,
    backgroundColor: config.P2,
    borderRadius: config.BR,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },

  sendBtnTxt: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: config.P1,
  },
});
