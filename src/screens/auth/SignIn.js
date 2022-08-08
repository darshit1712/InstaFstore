//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {icons} from '../../helper/iconConstant';
import {hp, wp} from '../../helper/constant';
import InputText from '../../components/common/InputText';
import CommonButton from '../../components/common/CommonButton';

// create a component
const SignIn = () => {
  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={icons.logo}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View>
        <InputText hide onChangeText={() => setEmail()} value={email} />
        <InputText
          secureTextEntry={showPass}
          onPress={() => setShowPass(!showPass)}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(3),
        }}>
        <Text>{"Don't have an account ?"}</Text>
        <CommonButton text={'SignUp'} />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {alignItems: 'center'},
  logoImage: {
    height: wp(20),
    width: wp(20),
  },
  textInputContainer: {marginHorizontal: wp(8), marginTop: hp(3)},
  inputText: {backgroundColor: null},
});

//make this component available to the app
export default SignIn;
