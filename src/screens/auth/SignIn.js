//import liraries
import React, {Component, useReducer, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {icons} from '../../helper/iconConstant';
import {hp, wp} from '../../helper/constant';
import InputText from '../../components/common/InputText';
import CommonButton from '../../components/common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// create a component
const SignIn = () => {
  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const {navigate} = useNavigation();

  const loginHandle = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(res => {
        console.log('res', res);

        const user = res?.user.uid;
        if (user) {
          navigate('List');
        }
        // const user = auth().currentUser.uid;
        // console.log('current :::::::', user);
        // console.log('res :::', res);
        // console.log('User account created & signed in!');

        // if (user !== null) {
        //   console.log('user   :::', user);
        //   // navigate('SignUp');
        // }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('error :::', error);
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/user-not-found') {
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/wrong-password') {
          console.log('That email address is invalid!');
        }
        navigate('SignUp');
        console.error(error);
      });
  };

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
        <InputText
          hide
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Email"
        />
        <InputText
          secureTextEntry={showPass}
          onPress={() => setShowPass(!showPass)}
          placeholder="Password"
          value={pass}
          onChangeText={text => setPass(text)}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(3),
        }}>
        <Text style={{marginBottom: hp(1), fontSize: 18, fontWeight: '700'}}>
          {"Don't have an account ?"}
        </Text>
        <CommonButton
          text={'SignUp'}
          buttonPress={() => {
            loginHandle();
          }}
        />
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
