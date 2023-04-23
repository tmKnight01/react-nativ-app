import React, {useState, useEffect, useRef} from 'react';
import {View, Button, StyleSheet, Text, Animated} from 'react-native';
import {getPositionInit, requestGetGeoPosition} from '../utils/native-position';

function NativePosition() {
  const [locaiotn, setLocation] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () =>
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

  const getPositionMessage = async () => {
    const result = await getPositionInit();

    if (result) {
      fadeIn().start();
      setLoading(true);
      requestGetGeoPosition(setLocation, setAddress, true).then;
    }
  };
  useEffect(() => {
    console.table([
      ['location', locaiotn],
      ['address', address],
    ]);
  }, [locaiotn, address]);

  return (
    <View style={styles.wrapBox}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        <Text>定位信息：{address} </Text>
      </Animated.View>

      <View style={styles.positionBtn}>
        <Button title="获取定位信息" onPress={getPositionMessage} />
      </View>
    </View>
  );
}

export default NativePosition;

const styles = StyleSheet.create({
  positionBtn: {
    padding: 10,
    fontSize: 16,
    marginTop: 10,
    width: '50%',
    // marginLeft: 100,
  },
  wrapBox: {
    alignItems: 'center',
  },
});
