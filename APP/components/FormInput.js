import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import config from '../assets/config';

export default function FormInput({
  labelValue,
  placeholderText,
  iconType,
  eyeoff,
  eye,
  ...rest
}) {
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  return (
    <View style={styles.action}>
      <Icon name={iconType} color={config.P2} size={20} />
      <TextInput
        secureTextEntry={data.secureTextEntry ? true : false}
        value={labelValue}
        placeholder={placeholderText}
        numberOfLines={1}
        {...rest}
        placeholderTextColor={config.S7}
        style={[
          styles.textInput,
          {
            color: config.P2,
          },
        ]}
      />
      <TouchableOpacity onPress={updateSecureTextEntry}>
        {data.secureTextEntry ? (
          <Feather name={eyeoff} color="grey" size={15} />
        ) : (
          <Feather name={eye} color="grey" size={15} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
