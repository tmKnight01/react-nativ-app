import React from 'react';
import {View, Text} from 'react-native';
import Icon from '@components/common/Icon';
import AppStyle from '@/style/index';
import styled from 'styled-components';
interface MiddleContentProps {
  currentIndex: number;
}
const ITEMS = [
  {
    title: 'DISCOVER',
    description: 'Find a new way to sharp your knowledge about the world.',
    icon: 'compass',
  },
  {
    title: 'LEARN',
    description:
      'Learn about a new subject everyday and start to see the world with a new perspective.',
    icon: 'brain',
  },
  {
    title: 'LISTEN ANY TIME',
    description:
      'Download your favorite podcasts and playlists to listen offline.',
    icon: 'headphones',
  },
];

const Warpper = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${({theme}) => theme.metrics.extraLargeSize}px;
  /* background-color: #ef010b; */
`;

const IconWrapper = styled(View)`
  width: ${({theme}) => theme.metrics.getWidthFromDP('50%')}px;
  height: ${({theme}) => theme.metrics.getWidthFromDP('50%')}px;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.metrics.getWidthFromDP('50%')}px;
  background-color: skyblue;
`;
const Title = styled(Text)`
  margin-top: ${({theme}) => 1.2 * theme.metrics.extraLargeSize}px;
  font-size: ${({theme}) => 1.3 * theme.metrics.extraLargeSize}px;
  margin-bottom: ${({theme}) => theme.metrics.mediumSize}px;
  font-family: CircularStd-Black;
  color: ${({theme}) => theme.colors.darkText};
`;
const Description = styled(Text)`
  font-size: ${({theme}) => 1 * theme.metrics.extraLargeSize}px;
  font-family: CircularStd-Medium;
  color: ${({theme}) => theme.colors.subTextWhite};
  text-align: center;
`;

// const IconWrapper = styled();

function MiddleContent({currentIndex = 0}: MiddleContentProps): JSX.Element {
  const {title, description, icon} = ITEMS[currentIndex];
  return (
    <Warpper>
      <IconWrapper>
        <Icon size={100} name={icon} color={AppStyle.colors.white} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Warpper>
  );
}

export default MiddleContent;
