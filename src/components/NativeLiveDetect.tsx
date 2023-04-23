import React from 'react';

import {
  requireNativeComponent,
  NativeModules,
  Button,
  View,
} from 'react-native';

const AliveHelper = NativeModules.AliveHelper;
const NTESRNLiveDetectView = requireNativeComponent('NTESRNLiveDetect');

function NativeLiveDetect() {
  return (
    <View>
      <Button
        onPress={() => AliveHelper.initWithBusinessID('易盾业务id', 30)}
        title="初始化SDK"
      />
      <Button onPress={() => AliveHelper.startAlive()} title="开始活体检测" />
      <NTESRNLiveDetectView
        style={{
          width: 250,
          height: 250,
          borderRadius: 125,
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </View>
  );
}

export default NativeLiveDetect;
