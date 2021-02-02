import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import config from '../assets/config';
import CloseBtn from '../commonComponents/CloseBtn';
import Logo from '../commonComponents/Logo';

export default function SignUp() {
  return (
    <ScrollView style={styles.signInContainer}>
      <View>
        <CloseBtn />
        <View style={styles.signUpImg}>
          <Logo />
        </View>
        <View style={styles.signUpForm}>
          <Text style={styles.generalText}>Create your account...</Text>
          <TextInput
            autoCompleteType="name"
            style={styles.signInInput}
            placeholder="First Name"></TextInput>
          <TextInput
            autoCompleteType="name"
            style={styles.signInInput}
            placeholder="Last Name"></TextInput>
          <TextInput
            autoCompleteType="tel"
            style={styles.signInInput}
            placeholder="Mobile No"></TextInput>
          <TextInput
            autoCompleteType="email"
            style={styles.signInInput}
            placeholder="Email Address"></TextInput>
          <TextInput
            style={styles.signInInput}
            placeholder="Password"></TextInput>
          <TextInput
            style={styles.signInInput}
            placeholder="Confirm Password"></TextInput>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => console.log('sign up')}>
            <Text style={styles.signInBtnTxt}>SIGN UP</Text>
          </TouchableOpacity>
          <Text style={styles.generalText}>OR</Text>
          <TouchableOpacity
            style={styles.signInGoogleBtn}
            onPress={() => console.log('login with')}>
            <Text style={styles.signInGoogleBtnTxt}>Sign up with</Text>
            <Image
              style={styles.signInGoogleBtnIcon}
              source={require('../imgs/googleIcon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.generalText}>Already registered?</Text>
          <TouchableOpacity onPress={() => console.log('Login Now')}>
            <Text style={styles.loginLink}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    height: '100%',
    backgroundColor: config.W,
  },
  signUpImg: {
    alignSelf: 'center',
    marginTop: 45,
    marginBottom: 25,
  },
  generalText: {
    color: config.P2,
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  signUpForm: {
    alignItems: 'center',
  },

  signInInput: {
    fontSize: 16,
    width: '90%',
    height: 40,
    borderColor: config.P2,
    borderWidth: 1,
    borderRadius: config.BR,
    paddingLeft: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
  },

  signInBtn: {
    width: 180,
    height: 50,
    backgroundColor: config.P2,
    borderRadius: config.BR,
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

  signInBtnTxt: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: config.P1,
  },

  signInGoogleBtn: {
    width: 180,
    height: 50,
    borderWidth: 2,
    borderRadius: config.BR,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInGoogleBtnTxt: {
    textAlign: 'center',
    fontSize: 21,
    color: config.P2,
  },

  signInGoogleBtnIcon: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    marginLeft: 10,
  },

  loginLink: {
    fontSize: 21,
    color: config.P1,
    textDecorationLine: 'underline',
    marginTop: -10,
    marginBottom: 20,
  },
});
