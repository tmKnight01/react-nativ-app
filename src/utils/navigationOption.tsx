import React from 'react';

import appStyles from '@/style/index';
import CONSTANTS from '@/utils/constants';
import HeaderActionButton from '@/components/common/HeaderActionButton';

export const DEFAULT_HEADER_STYLE = {
  headerBackTitle: null,
  headerTintColor: appStyles.colors.white,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  titleStyle: {
    color: appStyles.colors.white,
  },
  headerTitleStyle: {
    fontSize: appStyles.metrics.navigationHeaderFontSize,
    fontFamily: 'CircularStd-Bold',
    fontWeight: undefined,
  },
};

export const getDefaultHeaderWithTitle = (
  title: string,
  navigation: any,
): Object => {
  // const {params} = navigation;

  return {
    ...DEFAULT_HEADER_STYLE,
    headerTintColor: appStyles.colors.white,
    titleStyle: {
      color: appStyles.colors.white,
    },
    headerTransparent: false,
    headerStyle: {
      backgroundColor: appStyles.colors.lightSecondaryColor,
      borderBottomWidth: 0,
      elevation: 0,
      textAlign: 'center',
    },
    headerTitleAlign: 'center',
    title,
  };
};

export const getDefaultHeaderWithButton = (
  navigation: any,
  title: string,
  icon: string,
): Object => {
  // const {params} = navigation;

  // const onPressHeaderButton = params && params[CONSTANTS.PARAMS.HEADER_ACTION];
  const headerWithTitleStyle = getDefaultHeaderWithTitle(title, navigation);

  return {
    ...headerWithTitleStyle,
    headerRight: () => (
      <HeaderActionButton
        color={appStyles.colors.white}
        onPress={() => console.log('test')}
        icon={icon}
      />
    ),
  };
};
export default {};
