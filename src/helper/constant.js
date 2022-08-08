import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = val => widthPercentageToDP(val);

export const hp = val => heightPercentageToDP(val);

export const statusBarHeight = getStatusBarHeight();
