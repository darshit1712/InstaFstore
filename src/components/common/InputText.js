//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {hp, wp} from '../../helper/constant';
import {icons} from '../../helper/iconConstant';

// create a component
const InputText = ({
  placeholder,
  textStyle,
  onPress,
  passImgStyle,
  hide,
  secureTextEntry,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputText, textStyle]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
      />
      {!hide && (
        <TouchableOpacity onPress={onPress} style={{}}>
          <Image
            source={!secureTextEntry ? icons.unVisible : icons.visible}
            style={[styles.passStyle, passImgStyle]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  inputText: {
    flex: 1,
    marginHorizontal: wp(8),
    marginTop: hp(3),
    paddingRight: wp(12),
    borderBottomWidth: wp(0.2),
    paddingBottom: hp(1.5),
    fontSize: 17,
  },
  passStyle: {
    height: wp(10),
    width: wp(10),
    marginTop: hp(2),
    position: 'absolute',
    right: wp(8),
  },
  passPress: {
    alignSelf: 'center',
    marginBottom: hp(3),
  },
});

//make this component available to the app
export default InputText;
