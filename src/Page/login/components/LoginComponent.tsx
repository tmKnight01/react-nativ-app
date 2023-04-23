import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import Input from './Input';
import ChangeAction from './ChangeAction';
import BottomContent from './BottomContent';
const Wrapper = styled(View)`
  width: 100%;
  height: ${({theme}) => theme.metrics.getHeightFromDP('70%')}px;
  justify-content: space-between;
  align-items: center;
  /* background-color: skyblue; */
`;

interface Props {
  changeListIndex: (num: number) => void;
}

function LoginComponent({changeListIndex}: Props) {
  return (
    <Wrapper>
      <View style={{width: '90%'}}>
        <Input placeholder="E-mail" name="email-outline" type="emailAddress" />
        <Input
          placeholder="Password"
          name="lock-outline"
          type="password"
          style={{marginTop: 20}}
        />
        <ChangeAction
          questionText={'Not account?'}
          changeActionText={'Register now!'}
          buttonText={'Login'}
          onChangListIndex={() => changeListIndex(1)}
        />
      </View>
      <BottomContent
        selectAction={'login'}
        onNavigateToMainStack={() => console.log('test')}
      />
    </Wrapper>
  );
}

export default LoginComponent;
