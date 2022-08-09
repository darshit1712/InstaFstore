// import * as React from 'react';
// import {Image} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {icons} from '../helper/iconConstant';
// import ListScreen from '../screens/dashboard/ListScreen';
// import FavouriteScreen from '../screens/dashboard/FavouriteScreen';
// import EventScreen from '../screens/dashboard/EventScreen';
// import ProfileScreen from '../screens/dashboard/ProfileScreen';
// import {hp, wp} from '../helper/constant';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="List">
//       <Stack.Screen name="List" component={ListScreen} />
//     </Stack.Navigator>
//   );
// };

// const FavouriteStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Favourite">
//       <Stack.Screen name="Favourite" component={FavouriteScreen} />
//     </Stack.Navigator>
//   );
// };

// const EventSatck = () => {
//   return (
//     <Stack.Navigator initialRouteName="Event">
//       <Stack.Screen name="Event" component={EventScreen} />
//     </Stack.Navigator>
//   );
// };

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Profile">
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// };

// const TabNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let iconImage;
//           if (route.name === 'List') {
//             iconImage = focused ? icons.home : icons.homeBalck;
//           } else if (route.name === 'Favourite') {
//             iconImage = focused ? icons.heart : icons.heartBlack;
//           } else if (route.name === 'Profile') {
//             iconImage = focused ? icons.tabUser : icons.userBlack;
//           } else if (route.name === 'Event') {
//             iconImage = focused ? icons.tabEvent : icons.eventBlack;
//           }
//           return (
//             <Image
//               source={iconImage}
//               style={{height: hp(2.46), width: wp(8)}}
//               resizeMode="contain"
//             />
//           );
//         },
//       })}>
//       <Tab.Screen name="List" component={HomeStack} />
//       <Tab.Screen name="Favourite" component={FavouriteStack} />
//       <Tab.Screen name="Profile" component={ProfileStack} />
//       <Tab.Screen name="Event" component={EventSatck} />
//     </Tab.Navigator>
//   );
// };

// export default function DrawerNavigation() {
//   return (
//     <Drawer.Navigator initialRouteName="Tab">
//       <Drawer.Screen name="Tab" component={TabNavigation} />
//     </Drawer.Navigator>
//   );
// }

// create a component
// const DrawerNavigation = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View>
//           <Image source={icons.user} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

//make this component available to the app
