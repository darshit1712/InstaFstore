//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {hp, wp} from '../../helper/constant';
import {icons} from '../../helper/iconConstant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputText from '../../components/common/InputText';
import Modal from 'react-native-modal';
import CommonButton from '../../components/common/CommonButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

// create a component
const SignUp = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState(false);
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [confirmShowPass, setConfirmShowPass] = useState(true);

  const {navigate} = useNavigation();

  const handleConfirm = date => {
    setDob(moment(date).format('DD-MM-YYYY'));
    setBirthDate(false);
  };
  const goToPickImage = () => {
    ImagePicker.openPicker({
      height: 400,
      width: 400,
      cropping: true,
    }).then(image => {
      console.log('image.....', image);
    });
  };

  const onSignUpPress = () => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        const uid = auth().currentUser.uid;

        firestore()
          .collection('User')
          .doc(uid)
          .set({
            Id: uid,
            FirstName: fname,
            LastName: lname,
            Email: email,
            Password: pass,
            Gender: gender,
            BirthDate: dob,
          })
          .then(res => {
            console.log('res : ', res);

            console.log('Sign in with firebase successful!');
          })
          .catch(error => {
            alert(error);
          });

        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          ef;
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.signUpText}>{'Sign Up'}</Text>
        <TouchableOpacity onPress={() => goToPickImage()}>
          <Image source={icons.user} style={styles.userStyle} />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView>
        <View>
          <InputText
            hide
            placeholder={'First Name'}
            value={fname}
            onChangeText={text => setFname(text)}
          />
          <InputText
            placeholder={'Last Name'}
            hide
            value={lname}
            onChangeText={text => setLname(text)}
          />
          <InputText
            hide
            placeholder={'Email'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <InputText
            hide
            placeholder={'Birth Date'}
            onChangeText={dob => setDob(dob)}
            value={dob}
            onPressIn={() => setBirthDate(true)}
            onFocus={Keyboard.dismiss}
          />
          {/* <TouchableOpacity
            onPress={() => setBirthDate(true)}
            style={{
              paddingBottom: hp(1),
              borderBottomWidth: 0.5,
              borderBottomColor: '#000000',
              marginTop: hp(4),
              marginHorizontal: wp(8),
            }}>
            {dob.length == 0 ? (
              <Text style={{fontSize: 18}}>{'Birth Date'}</Text>
            ) : (
              <Text style={{fontSize: 18}}>{dob}</Text>
            )}
          </TouchableOpacity> */}
          <InputText
            hide
            placeholder={'Gender'}
            onPressIn={() => setIsVisibleModal(true)}
            onFocus={Keyboard.dismiss}
            value={gender}
            onChangeText={gender => setGender(gender)}
          />
          <InputText
            placeholder={'Password'}
            secureTextEntry={showPass}
            onPress={() => setShowPass(!showPass)}
            onChangeText={text => setPass(text)}
            value={pass}
          />
          <InputText
            placeholder={'Confirm Password'}
            value={confirmPass}
            onChangeText={text => setConfirmPass(text)}
            secureTextEntry={confirmShowPass}
            onPress={() => setConfirmShowPass(!confirmShowPass)}
          />
        </View>
        <View style={{marginTop: hp(3.5)}}>
          <CommonButton
            text={'SignIn'}
            buttonPress={() => {
              onSignUpPress();
              navigate('SignIn');
            }}
          />
        </View>
        <Modal
          isVisible={isVisibleModal}
          onBackdropPress={() => setIsVisibleModal(false)}
          style={{
            backgroundColor: '#FFF',
            margin: 0,
            marginTop: hp(65),
          }}>
          <CommonButton
            buttonStyle={{
              marginBottom: hp(2),
              backgroundColor: 'white',
              borderWidth: hp(0.3),
              width: wp(75),
            }}
            text={'Male'}
            buttonPress={() => {
              setGender('Male');
              setIsVisibleModal(false);
            }}
          />
          <CommonButton
            buttonStyle={{
              marginBottom: hp(2),
              backgroundColor: 'white',
              borderWidth: hp(0.3),
              width: wp(75),
            }}
            text={'Female'}
            buttonPress={() => {
              setGender('Female');
              setIsVisibleModal(false);
            }}
          />
          <CommonButton
            buttonStyle={{
              marginBottom: hp(2),
              backgroundColor: 'white',
              borderWidth: hp(0.3),
              width: wp(75),
            }}
            text={'Other'}
            buttonPress={() => {
              setGender('Other');
              setIsVisibleModal(false);
            }}
          />
        </Modal>
        <DateTimePickerModal
          isVisible={birthDate}
          mode="date"
          onCancel={() => setBirthDate(false)}
          onConfirm={handleConfirm}
          maximumDate={new Date()}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(3),
    paddingBottom: hp(1.5),
  },
  signUpText: {
    fontSize: 19,
    fontWeight: '900',
    marginTop: hp(1.5),
  },
  userStyle: {
    height: wp(12),
    width: wp(12),
  },
});

//make this component available to the app
export default SignUp;
