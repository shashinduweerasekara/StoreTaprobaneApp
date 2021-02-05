import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import config from '../assets/config';

export default function FormInput({
  labelValue,
  placeholderText,
  iconType,
  ...rest
}) {
  return (
    <View style={styles.action}>
      <Icon name={iconType} color={config.P2} size={20} />
      <TextInput
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
