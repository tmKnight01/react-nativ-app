/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import NativeCrema from '../components/NativeCrema';
import NativePhoto from '../components/NativePhoto';
import StatusBarS from '../components/StatusBar';
import NativePosition from '../components/NativePosition';
import {ROUTE} from '../utils/constants';

function Home(): JSX.Element {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 500],
    outputRange: ['white', 'red'],
  });

  const AnimatedEvent = Animated.event([
    {
      nativeEvent: {
        contentOffset: {y: scrollY}, //将y值保存到state中背景色偏移距离的值上
      },
    },
  ]);

  useEffect(() => {
    console.log('scrollY', scrollY);
  }, [scrollY]);

  const SafeView = styled.SafeAreaView`
  align-item: center,
  justify-content: center`;

  return (
    <>
      <Animated.ScrollView
        style={{backgroundColor: backgroundColor}}
        onScroll={AnimatedEvent}>
        <SafeView
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTE.OTHER, {aboutId: 285, name: '辛清河'})
            }
            style={styles.btnStyle}>
            <Text style={{color: '#fff'}}>跳转Other页面</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => navigation.navigate(ROUTE.ABOUT)}>
            <Text style={{color: '#fff'}}>跳转About页面</Text>
          </TouchableOpacity>
        </SafeView>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: 350,
            }}
          />
          <NativeCrema />
        </View>
        <NativePhoto />
        <StatusBarS />
        <NativePosition />
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  wrapps: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  btnStyle: {
    width: 120,
    height: 40,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 10,
  },
});

export default Home;
