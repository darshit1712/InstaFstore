import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import ListScreen from '../screens/dashboard/ListScreen';
import auth from '@react-native-firebase/auth';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  // const [logIn, setLogIn] = React.useState(false);
  // React.useEffect(() => {
  //   auth().onAuthStateChanged(user => {
  //     if (user) {
  //       setLogIn(true);
  //     } else {
  //       setLogIn(false);
  //     }
  //   });
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* {logIn === true ? (
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
        ) : (
          <> */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="List" component={ListScreen} />
        {/* </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
