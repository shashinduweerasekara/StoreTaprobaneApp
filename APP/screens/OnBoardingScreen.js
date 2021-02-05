import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import config from '../assets/config';

const OnBoardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={config.P1} barStyle="dark-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: config.W,
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: config.P2,
            },
          ]}>
          Feel the real lankan taste !
        </Text>
        <Text style={styles.text}>Sign in with your account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={[config.P2, config.S4]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color={config.W} size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default OnBoardingScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config.P1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: config.W,
    borderTopLeftRadius: config.BR,
    borderTopRightRadius: config.BR,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    resizeMode: 'contain',
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: config.P2,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: config.P1,
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: config.BR,
    flexDirection: 'row',
  },
  textSign: {
    color: config.P1,
    fontWeight: 'bold',
  },
});
