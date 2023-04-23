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
function RegisterComponent({changeListIndex}: Props) {
  return (
    <Wrapper>
      <View style={{width: '90%'}}>
        <Input placeholder="E-mail" name="email-outline" type="emailAddress" />
        <Input
          placeholder="Password"
          name="lock-outline"
          type="password"
          style={{marginVertical: 20}}
        />
        <Input
          placeholder="Confirm Password"
          name="lock-reset"
          type="password"
        />
        <ChangeAction
          questionText={'Has account?'}
          changeActionText={'Log-in!'}
          buttonText={'REGISTER'}
          onChangListIndex={() => changeListIndex(0)}
        />
      </View>
      <BottomContent
        selectAction={'register'}
        onNavigateToMainStack={() => console.log('test')}
      />
    </Wrapper>
  );
}

export default RegisterComponent;
