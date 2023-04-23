import React, {useEffect, useMemo, useRef} from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  FlatList,
  Animated,
} from 'react-native';
import Header from './components/Header';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import styled from 'styled-components';

function Login() {
  const listRef = useRef<FlatList<string>>();
  const headerAnimation = useRef(new Animated.Value(0));
  const inputAnimation = useRef(new Animated.Value(0));
  const LAYOUTS = [
    {Component: LoginComponent, id: 'login'},
    {Component: RegisterComponent, id: 'register'},
  ];
  const Wrapper = styled(ImageBackground).attrs({
    source: {
      uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg',
    },
  })`
    flex: 1;
    width: 100%;
    height: 100%;
    position: absolute;
  `;
  const DrakLayer = styled(View)`
    width: 100%;
    height: 100%;
    background-color: 'rgba(0, 0, 0, 0.6)';
    position: absolute;
  `;
  const ContentWrapper = styled(View)`
    width: ${({theme}) => theme.metrics.width}px;
    height: 100%;
  `;

  const changeListIndex = (index: number) => {
    listRef.current?.scrollToIndex({index, animated: true});
  };

  const _aimateStyle = (animation: Animated.Value) => {
    const translateY = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-10, 0],
    });
    return {
      opacity: headerAnimation.current,
      transform: [
        {
          translateY,
        },
      ],
    };
  };

  const headerAimateStyle = _aimateStyle(headerAnimation.current);
  const inputAnimateStyle = _aimateStyle(inputAnimation.current);
  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(headerAnimation.current, {
        duration: 500,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(headerAnimation.current, {
        duration: 700,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Wrapper>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <DrakLayer />
      <Animated.View style={headerAimateStyle}>
        <Header />
      </Animated.View>

      <Animated.View style={inputAnimateStyle}>
        <FlatList
          ref={ref => (listRef.current = ref)}
          renderItem={({item}) => {
            return (
              <ContentWrapper>
                <item.Component changeListIndex={changeListIndex} />
              </ContentWrapper>
            );
          }}
          keyExtractor={item => item.id}
          data={LAYOUTS}
          pagingEnabled
          scrollEnabled={false}
          horizontal
        />
      </Animated.View>
    </Wrapper>
  );
}

export default Login;
