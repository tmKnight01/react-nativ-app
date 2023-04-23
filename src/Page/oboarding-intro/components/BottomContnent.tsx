import React, {useEffect, useMemo} from 'react';
import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';
import DefaultText from '@components/common/DefaultText';
import {useNavigation} from '@react-navigation/native';
import appstyle from '@/style/index';
import {ROUTE} from '@/utils/constants';

const ButtonWrapper = styled(View)`
  width: 100%;
  height: ${({theme}) => theme.metrics.getHeightFromDP('10%')}px;
  background-color: skyblue;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface BottomContentProps {
  currentIndex?: number;
  onPressPrevious?: Function;
}

const Button = styled(TouchableOpacity)`
  width: 35%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function BottomContent({}: BottomContentProps) {
  const navigation = useNavigation();

  return (
    <ButtonWrapper>
      <Button
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: ROUTE.LOGIN}],
          })
        }>
        <DefaultText text="GO START" color={appstyle.colors.white} />
      </Button>
    </ButtonWrapper>
  );
}

export default BottomContent;
