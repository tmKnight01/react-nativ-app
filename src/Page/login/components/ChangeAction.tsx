import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/core';
import appStyle from '@/style/index';
import {ROUTE} from 'utils/constants';
import DefaultText from '@/components/common/DefaultText';
import DefaultButton from '@/components/common/DefaultButton';

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20;
  /* background-color: skyblue; */
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`;

interface Props {
  questionText: string;
  buttonText: string;
  changeActionText: string;
  onChangListIndex: (num: number) => void;
}
const ChangeAction = ({
  questionText,
  changeActionText,
  buttonText,
  onChangListIndex,
}: Props) => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <Row>
        <DefaultText
          color={appStyle.colors.white}
          text={questionText}
          style={{marginRight: 20}}
        />
        <TouchableOpacity onPress={onChangListIndex}>
          <DefaultText
            color={appStyle.colors.primaryColor}
            text={changeActionText}
          />
        </TouchableOpacity>
      </Row>
      <DefaultButton
        onPress={() => navigation.navigate(ROUTE.INTEREST)}
        text={buttonText}
        size="large"
      />
    </Wrapper>
  );
};

export default ChangeAction;
