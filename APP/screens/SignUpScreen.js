import React, {useState, useContext} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from '../assets/config';
import FormInput from '../components/FormInput';
import FormPrimaryBtn from '../components/FormPrimaryBtn';
import GoogleBtn from '../components/GoogleBtn';
import {AuthContext} from '../navigation/AuthProvider';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register, googleLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={config.P1} barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
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
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Your Password"
            iconType="lock-outline"
            secureTextEntry={true}
          />

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <FormInput
            labelValue={confirmPassword}
            onChangeText={(userConfirmPassword) =>
              setConfirmPassword(userConfirmPassword)
            }
            placeholderText="Your Password"
            iconType="lock-outline"
            secureTextEntry={true}
          />
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <TouchableOpacity>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Terms of service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and</Text>
            <TouchableOpacity>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Privacy policy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <FormPrimaryBtn
              btnTitle="Sign Up"
              onPress={() => register(email, password)}
            />
            {Platform.OS === 'android' ? (
              <GoogleBtn
                btnTitle="Sign Up with "
                onPress={() => googleLogin()}
              />
            ) : null}
          </View>
          <TouchableOpacity
            style={styles.bottomTextWapper}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.bottomTextBlack}>
              Have an account?{' '}
              <Text style={styles.bottomTextOrange}>Sign In Now</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
    flex: Platform.OS === 'ios' ? 3 : 5,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: config.P2,
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
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
