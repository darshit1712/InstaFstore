import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/auth/SignIn';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
