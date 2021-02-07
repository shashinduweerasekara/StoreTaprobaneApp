import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../assets/config';
import FormInput from '../components/FormInput';
import FormPrimaryBtn from '../components/FormPrimaryBtn';
import GoogleBtn from '../components/GoogleBtn';
import {AuthContext} from '../navigation/AuthProvider';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={config.P1} barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: config.W,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: config.P2,
            },
          ]}>
          Email
        </Text>
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Your Email"
          iconType="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text
          style={[
            styles.text_footer,
            {
              color: config.P2,
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View>
          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Your Password"
            iconType="lock-outline"
            eyeoff="eye-off"
            eye="eye"
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Text style={{color: config.P2, marginTop: 15}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AppBottomTab')}>
            <Text style={{color: config.P1, marginTop: 15}}>Sign In Later</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <FormPrimaryBtn
            btnTitle="Sign In"
            onPress={() => login(email, password)}
          />
          {Platform.OS === 'android' ? (
            <GoogleBtn btnTitle="Sign In with " onPress={() => googleLogin()} />
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.bottomTextWapper}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.bottomTextBlack}>
            Don't have an account?{' '}
            <Text style={styles.bottomTextOrange}>Sign Up Now</Text>
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.P1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: config.W,
    borderTopLeftRadius: config.BR,
    borderTopRightRadius: config.BR,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: config.P2,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: config.P2,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: config.S5,
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: config.S6,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: config.P2,
  },
  errorMsg: {
    color: config.S6,
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: config.BR,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  bottomTextWapper: {
    alignItems: 'center',
    marginTop: 20,
  },

  bottomTextOrange: {
    fontSize: 18,
    fontWeight: 'bold',
    color: config.P1,
  },
  bottomTextBlack: {
    fontSize: 18,
    color: config.P2,
  },
});
