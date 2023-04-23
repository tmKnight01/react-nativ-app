import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  height: ${({theme}) => theme.metrics.getHeightFromDP('20%')}px;
  background-image: url(${({uri}) => uri});
`;

const DrakLayer = styled(View)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: ${({isSelected, theme}) =>
    isSelected ? theme.colors.interestSelectedColor : theme.colors.drakLayer};
  align-items: center;
  justify-content: center;
`;

const ImageLayer = styled(Image).attrs(({uri}) => ({
  source: {
    uri,
  },
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 4px;
`;

// const ImageLayer =
const InterestTitle = styled(Text)`
  font-family: CircularStd-Black;
  font-size: ${({theme}) => theme.metrics.extraLargeSize}px;
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`;
interface ListItemProps {
  imageURL: string;
  title: string;
  onPressItem: Function;
  isSelected: boolean;
}

function InterestListItem({
  isSelected,
  imageURL,
  title,
  onPressItem,
}: ListItemProps) {
  return (
    <Wrapper onPress={onPressItem}>
      <ImageLayer uri={imageURL} />
      <DrakLayer isSelected={isSelected}>
        <InterestTitle>{title}</InterestTitle>
      </DrakLayer>
    </Wrapper>
  );
}

export default InterestListItem;
