import React from 'react';
import styled from 'styled-components';
import appStyle from '@/style/index';
import {Text, View} from 'react-native';
import DefaultText from 'components/common/DefaultText';
function Header() {
  const SloganWrapper = styled(View)`
    width: 100%;
    flex-direction: row;
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    justify-content: center;
  `;

  const AppTitle = styled(Text)`
    font-size: ${({theme}) => theme.metrics.getWidthFromDP('8%')}px;
    color: ${({theme}) => theme.colors.white};
    text-align: center;
  `;
  const Wrapper = styled(View)`
    width: 100%;
    height: ${({theme}) => theme.metrics.getHeightFromDP('30%')}px;
    align-items: center;
    justify-content: center;
  `;
  return (
    <Wrapper>
      <AppTitle>XINQINGHE </AppTitle>
      <SloganWrapper>
        <DefaultText
          color={appStyle.colors.white}
          text="A new way to boost your"
        />
        <DefaultText color={appStyle.colors.primaryColor} text=".knowledge" />
      </SloganWrapper>
    </Wrapper>
  );
}

export default Header;
