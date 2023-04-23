/*

使用react-native-camera调起相机 拍摄并且保存


*/
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
function NativeCrema() {
  const [image, setImage] = useState(
    'https://reactnative.dev/docs/assets/p_cat2.png',
  );

  const openCream = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        console.log('吊起相机');
        const result = await launchCamera({mediaType: 'photo'});
        console.log('result', result);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

    console.log('result', result);
  };

  return (
    <View style={style.container}>
      <Image source={{uri: image}} style={{width: 250, height: 250}} />
      <TouchableOpacity onPress={openCream}>
        <Text style={style.button}>调起相机</Text>
      </TouchableOpacity>
    </View>
  );
}
export default NativeCrema;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 300,
    backgroundColor: '#f0fc',
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
