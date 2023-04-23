import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
function Page({navigation,route}) {
  // const route = useRoute();
  const {aboutId = 1, name = ''} = route;
  return (
    <View style={styles.box}>
      <Text>This is Text Page</Text>
      <Text> PageId: {JSON.stringify(aboutId)}</Text>
      <Text> Name: {JSON.stringify(name)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    fontSize: 24,
  },
});

export default Page;
