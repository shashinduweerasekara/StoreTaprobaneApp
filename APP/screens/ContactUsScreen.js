import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';
import config from '../assets/config';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormPrimaryBtn from '../components/FormPrimaryBtn';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ContactUsScreen({navigation}) {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.contactUsContainer}>
      <StatusBar backgroundColor={config.P1} barStyle="dark-content" />
      {user ? (
        <ScrollView style={styles.contactUsContant}>
          <View>
            <Text style={styles.pageTitle}>Contact Us</Text>
            <Text style={styles.pageDescription}>
              Feel free to contact us. Our agent will be back to you within 48
              hours.
            </Text>
            <View style={styles.contactUsForm}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: config.P2,
                    marginTop: 35,
                  },
                ]}>
                Subject
              </Text>
              <View>
                <FormInput placeholderText="Subject" iconType="subject" />
              </View>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: config.P2,
                    marginTop: 35,
                  },
                ]}>
                Message
              </Text>
              <View>
                <FormInput placeholderText="Your message" iconType="note" />
              </View>
            </View>
            <View style={styles.attachment}>
              <TouchableOpacity>
                <Icon
                  name="camera"
                  color={config.P2}
                  size={30}
                  style={styles.attachmentIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="attachment"
                  color={config.P2}
                  size={30}
                  style={styles.attachmentIcon}
                />
              </TouchableOpacity>
            </View>
            <FormPrimaryBtn btnTitle="Send" />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: config.W,
            borderTopRightRadius: config.BR,
            borderTopLeftRadius: config.BR,
          }}>
          <Button
            title="Sign in"
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contactUsContainer: {
    flex: 1,
    backgroundColor: config.P1,
    height: '100%',
  },

  contactUsContant: {
    backgroundColor: config.W,
    borderTopRightRadius: config.BR,
    borderTopLeftRadius: config.BR,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  pageTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: config.P2,
  },

  pageDescription: {
    fontSize: 16,
    color: config.P2,
  },

  attachment: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },

  attachmentIcon: {
    marginRight: 20,
  },

  text_footer: {
    color: config.P2,
    fontSize: 18,
  },
});
