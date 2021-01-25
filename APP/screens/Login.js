import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import config from '../assets/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Login() {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <CloseBtn />
      <Image style={styles.loginImg} source={require('../imgs/logo.png')} />
      <Text style={styles.generalText}>Login to continue</Text>
      <TextInput placeholder="Email" style={styles.loginInput}></TextInput>
      <TextInput placeholder="Password" style={styles.loginInput}></TextInput>
      <TouchableOpacity
        onPress={() => console.log('tapped')}
        style={styles.forgottenPassword}>
        <Text style={styles.forgottenPasswordText}>Forgotten password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => console.log('login')}>
        <Text style={styles.loginBtnTxt}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.generalText}>OR</Text>
      <TouchableOpacity
        style={styles.loginGoogleBtn}
        onPress={() => console.log('login with')}>
        <Text style={styles.loginGoogleBtnTxt}>Login with</Text>
        <Image
          style={styles.loginGoogleBtnIcon}
          source={require('../imgs/googleIcon.png')}
        />
      </TouchableOpacity>
      <Text style={styles.generalText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => console.log('Sign up now')}>
        <Text style={styles.signUpLink}>Sign Up Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: config.W,
  },
  loginImg: {
    resizeMode: 'contain',
    height: 80,
    marginTop: 40,
    marginBottom: 40,
  },
  generalText: {
    color: config.P2,
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginInput: {
    fontSize: 21,
    width: 300,
    height: 50,
    borderColor: config.P2,
    borderWidth: 1,
    borderRadius: config.BR,
    paddingLeft: 10,
    marginBottom: 10,
  },
  forgottenPassword: {
    alignSelf: 'flex-end',
    marginTop: -5,
  },
  forgottenPasswordText: {
    fontSize: 13,
    color: config.P2,
    textDecorationLine: 'underline',
    right: 30,
  },

  loginBtn: {
    width: 180,
    height: 50,
    backgroundColor: config.P2,
    borderRadius: config.BR,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  loginBtnTxt: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: config.P1,
  },

  loginGoogleBtn: {
    width: 180,
    height: 50,
    borderWidth: 2,
    borderRadius: config.BR,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginGoogleBtnTxt: {
    textAlign: 'center',
    fontSize: 21,
    color: config.P2,
  },

  loginGoogleBtnIcon: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    marginLeft: 10,
  },

  signUpLink: {
    fontSize: 21,
    color: config.P1,
    textDecorationLine: 'underline',
    marginTop: -20,
  },
});
