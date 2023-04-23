import React from 'react';
import {TextInput, View} from 'react-native';
import styled from 'styled-components';
import Icon from '@/components/common/Icon';
import appStyle from '@/style/index';

const Wrapper = styled(View).attrs(({style}) => ({style}))`
  width: 100%;
  height: ${({theme}) => theme.metrics.getHeightFromDP('8%')}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
`;
const InputWrapper = styled(View)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${({theme}) => theme.metrics.largeSize}px;
  /* background-color: skyblue; */
`;

const CustomInput = styled(TextInput).attrs(({placeholder, type, theme}) => ({
  placeholderTextColor: theme.colors.subTextWhite,
  selectionColor: theme.colors.darkText,
  underlineColorAndroid: 'transparent',
  secureTextEntry: type === 'password',
  autoCapitalize: 'none',
  textContentType: type,
  autoCorrect: false,
  placeholder,
}))`
  width: 90%;
  height: 100%;
  margin-left: ${({theme}) => theme.metrics.mediumSize}px;
  font-size: ${({theme}) => 1.1 * theme.metrics.largeSize}px;
  font-family: CircularStd-Book;
  color: ${({theme}) => theme.colors.darkText};
`;

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  style?: Object;
}

function Input({type, placeholder, name, style = {}}: InputProps) {
  return (
    <Wrapper style={style}>
      <InputWrapper>
        <Icon name={name} size={22} color={appStyle.colors.darkText} />
        <CustomInput placeholder={placeholder} textContentType={type} />
      </InputWrapper>
    </Wrapper>
  );
}

export default Input;
