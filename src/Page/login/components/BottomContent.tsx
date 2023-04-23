import react from 'React';
import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import DefaltText from '@/components/common/DefaultText';
import DefaultText from '@/components/common/DefaultText';
import Icon from '@/components/common/Icon';
import appStyle from '@/style/index';
interface Props {
  selectAction: 'login' | 'register';
  onNavigateToMainStack: Function;
}

const Wrapper = styled(View)`
  width: 100%;
  /* background-color: skyblue; */
  align-items: center;
`;
const WrappLine = styled(View)`
  flex-direction: row;
  justify-content: center;
`;
const Line = styled(View)`
  width: ${({theme}) => theme.metrics.getWidthFromDP('25%')};
  height: 1px;
  background-color: #fff;
  align-self: center;
`;

const OrText = styled(Text)`
  margin-horizontal: ${({theme}) => theme.metrics.extraLargeSize}px;
  font-size: ${({theme}) => theme.metrics.getWidthFromDP('4.5%')}px;
  font-family: CircularStd-Bold;
  color: ${({theme}) => theme.colors.primaryColor};
`;

const ButtonWrapper = styled(TouchableOpacity).attrs(({style, onPress}) => ({
  style,
  onPress,
}))`
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-vertical: ${({theme}) => theme.metrics.mediumSize}px;
  padding-horizontal: ${({theme}) => theme.metrics.extraLargeSize}px;
  margin-bottom: ${({theme}) => theme.metrics.largeSize}px;
  border-radius: 5px;
`;

interface RenderButtonProps {
  // withMarginBottom: boolean;
  // backgroundColor: string;
  style?: Object;
  actionSelected: string;
  onPress: Function;
  iconName: string;
  size: number;
}
const BtnRender = ({
  style,
  actionSelected,
  onPress,
  iconName,
  size,
}: RenderButtonProps): JSX.Element => {
  return (
    <ButtonWrapper style={style} onPress={onPress}>
      <DefaultText
        text={`${actionSelected} whth`}
        color={appStyle.colors.white}
      />
      <Icon size={size} color={appStyle.colors.white} name={iconName} />
    </ButtonWrapper>
  );
};

function BottomContent({selectAction, onNavigateToMainStack}: Props) {
  return (
    <Wrapper>
      <WrappLine>
        <Line />
        <OrText>OR</OrText>
        <Line />
      </WrappLine>
      {BtnRender({
        actionSelected: selectAction,
        onPress: onNavigateToMainStack,
        iconName: 'account-minus-outline',
        size: 25,
        style: {
          backgroundColor: appStyle.colors.facebook,
          marginVertical: appStyle.metrics.largeSize,
        },
      })}
      {BtnRender({
        actionSelected: selectAction,
        onPress: onNavigateToMainStack,
        iconName: 'account-key-outline',
        size: 25,
        style: {
          backgroundColor: appStyle.colors.googlePlus,
        },
      })}
    </Wrapper>
  );
}

export default BottomContent;
