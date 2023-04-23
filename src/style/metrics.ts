// @flow

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const getWidthFromDP = (widthPercentage: string): number => {
  const percentageDesired = parseFloat(widthPercentage);
  const widthPercentageToDP = PixelRatio.roundToNearestPixel(
    (width * percentageDesired) / 100,
  );

  return widthPercentageToDP;
};

const getHeightFromDP = (heightPercentage: string): number => {
  const percentageDesired = parseFloat(heightPercentage);
  const heightPercentageToDP = PixelRatio.roundToNearestPixel(
    (height * percentageDesired) / 100,
  );

  return Math.floor(heightPercentageToDP);
};

export default {
  navigationHeaderFontSize: Platform.OS === 'ios' ? 17 : 19,
  navigationHeaderHeight: Platform.OS === 'ios' ? 64 : 54,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  extraSmallSize: getWidthFromDP('1%'),
  smallSize: getWidthFromDP('2%'),
  mediumSize: getWidthFromDP('3%'),
  largeSize: getWidthFromDP('4%'),
  extraLargeSize: getWidthFromDP('5%'),
  getWidthFromDP,
  getHeightFromDP,
  width,
  height,
};

export type AppDimensions = {
  navigationHeaderFontSize: number;
  navigationHeaderHeight: number;
  statusBarHeight: number;
  extraSmallSize: number;
  smallSize: number;
  mediumSize: number;
  largeSize: number;
  extraLargeSize: number;
  getWidthFromDP: (percentage: string) => number;
  getHeightFromDP: (percentage: string) => number;
  width: number;
  height: number;
};
