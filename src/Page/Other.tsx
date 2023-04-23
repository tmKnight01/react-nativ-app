import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

function Page3(props: any) {
  // const {route} = props;
  const route = useRoute();
  // const navigation = useNavigation();
  const {initValue=''} = route.params;
  return (
    <View style={styles.box}>
      <Text>This is a Other Page</Text>
      <Text>initValue: {initValue} </Text>
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

export default Page3;
