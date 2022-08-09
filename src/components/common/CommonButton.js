//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../helper/constant';

// create a component
const CommonButton = ({buttonStyle, buttonPress, text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={buttonPress}
        style={[styles.buttonContainer, buttonStyle]}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  buttonContainer: {
    height: hp(7),

    width: wp(50),
    borderRadius: wp(25),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '800',
  },
});

//make this component available to the app
export default CommonButton;
