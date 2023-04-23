import React, {useState, useRef} from 'react';
import MiddleContent from './components/MiddleContent';
import {
  View,
  StatusBar,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import BottomContent from './components/BottomContnent';
import styled from 'styled-components';
import appStyle from '@/style/metrics';
function OboardingIntro() {
  const Wrapper = styled(View)`
    flex: 1;
    justify-content: space-between;
    padding-top: ${({theme}) => theme.metrics.getHeightFromDP('15%')}px;
    background-color: ${({theme}) => theme.colors.white};
  `;

  const PAGES = [
    {title: 'discover', id: 1681281562150},
    {title: 'learn', id: 1681281562151},
    {title: 'listen', id: 1681281562152},
  ];
  const IntroScreenWrapper = styled(View)`
    flex: 1;
    width: ${({theme}) => theme.metrics.width}px;
    justify-content: space-between;
    /* background-color: red; */
  `;

  const pressPrvious = () => {
    // setcurrentPageIndex(currentPageIndex - 1);
    // ListRef.current?.scrollToIndex({
    //   index: currentPageIndex - 1,
    //   animated: true,
    // });
  };

  const onFlatlistMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const {contentOffset} = e.nativeEvent;
    const isHorizontalSwipeMovement = contentOffset.x > 0;
    const currentPage = isHorizontalSwipeMovement
      ? Math.ceil(contentOffset.x / appStyle.width)
      : 0;

    console.log('currentPage', currentPage, contentOffset.x);

    // setcurrentPageIndex(currentPage);
  };

  return (
    <Wrapper>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
        animated
      />
      <ScrollView
        onMomentumScrollEnd={onFlatlistMomentumScrollEnd}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {PAGES.map((item, index) => (
          <IntroScreenWrapper key={item.id}>
            <MiddleContent currentIndex={index} />
            {index === PAGES.length - 1 ? <BottomContent /> : null}
          </IntroScreenWrapper>
        ))}
      </ScrollView>
    </Wrapper>
  );
}

export default OboardingIntro;
