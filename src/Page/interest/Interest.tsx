import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import InterestListItem from './components/InterestListItem';

function Interest() {
  const Wrapper = styled(View)`
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: ${({theme}) => theme.colors.backgroundColor};
  `;

  const DEFAULT_INTERESTS = [
    {
      isSelected: true,
      title: 'ALL',
      imageURL:
        'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/all/all.jpg',
    },
    {
      isSelected: false,
      title: 'TECHNOLOGY',
      imageURL:
        'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/technology/big.jpg',
    },
    {
      isSelected: false,
      title: 'PHILOSOFY',
      imageURL:
        'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/philosofy/big.jpg',
    },
    {
      isSelected: false,
      title: 'SCIENCE',
      imageURL:
        'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/science/big.jpeg',
    },
    {
      isSelected: false,
      title: 'BUSINESS',
      imageURL:
        'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/business/big.jpg',
    },
    {
      isSelected: false,
      title: 'POP CULTURE',
      imageURL:
        'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/pop-culture/big.jpg',
    },
    {
      isSelected: false,
      title: 'HISTORY',
      imageURL:
        'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/history/big.jpg',
    },
  ];

  const ListText = styled(Text)`
    padding-vertical: ${({theme}) => theme.metrics.largeSize}px;
    font-size: ${({theme}) => theme.metrics.extraLargeSize * 1.1}px;
    color: ${({theme}) => theme.colors.textColor};
    font-family: CircularStd-Medium;
    text-align: center;
  `;

  return (
    <Wrapper>
      <ListText> This is Interest</ListText>
      <InterestListItem
        imageURL={
          'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/all/all.jpg'
        }
        title={'Tecnoligo'}
        isSelected={true}
        onPressItem={() => console.log('log...')}
      />
    </Wrapper>
  );
}

export default Interest;
