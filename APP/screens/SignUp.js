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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SignUp() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.signInContainer}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              right: 15,
            }}>
            <FontAwesome5
              name={'times'}
              style={{
                fontSize: 30,
                color: config.P2,
              }}
            />
          </TouchableOpacity>
          <Image
            style={styles.signInImg}
            source={require('../imgs/logo.png')}
          />
          <Text style={styles.generalText}>Create your account...</Text>
          <View>
            <Text>First Name *</Text>
            <TextInput
              style={styles.signInInput}
              placeholder="eg: Saman"></TextInput>
            <Text>Last Name *</Text>
            <TextInput
              style={styles.signInInput}
              placeholder="eg: Edirimunee"></TextInput>
            <Text>Email *</Text>
            <TextInput
              style={styles.signInInput}
              placeholder="eg: saman@secondinning.com"></TextInput>
            <Text>Password *</Text>
            <TextInput
              style={styles.signInInput}
              placeholder="eg: Login@123"></TextInput>
            <Text>Confirm Password *</Text>
            <TextInput
              style={styles.signInInput}
              placeholder="eg: Login@123"></TextInput>
          </View>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    alignItems: 'center',
    backgroundColor: config.W,
  },
  signInImg: {
    resizeMode: 'contain',
    height: 80,
    marginTop: 30,
    marginBottom: 10,
  },
  generalText: {
    color: config.P2,
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signInInput: {
    fontSize: 21,
    width: 300,
    height: 50,
    borderColor: config.P2,
    borderWidth: 1,
    borderRadius: config.BR,
    paddingLeft: 10,
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