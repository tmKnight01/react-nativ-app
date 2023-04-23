/*
访问本地相册 
*/
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
function NativePhoto() {
  const [imageUrls, setImageUrls] = useState<Array<string>>();

  const Toast = () => Alert.alert('title', '这是message');
  const getPhoto = async () => {
    const result = await launchImageLibrary({
      //   durationLimit: 3,
      mediaType: 'photo',
      //   saveToPhotos: true,
    });
    console.log('result', result);
    if (result.assets) {
      setImageUrls(result?.assets);
      //   setImageUrls(result?.assets);
    } else {
      Alert.alert('发生了错误', '图片未获取到,请重试');
    }
  };

  return (
    // <ScrollView>
    <View style={style.wrap_box}>
      <TouchableOpacity onPress={() => Toast()}>
        <Text style={style.button}>Toast提示</Text>
        {/* {imageUrl && <>} */}

        <Text style={style.button} onPress={() => getPhoto()}>
          访问本地相册
        </Text>
      </TouchableOpacity>
      {/* <Image
        source={{
          uri: 'file:///Users/xin/Library/Developer/CoreSimulator/Devices/6F4F3B99-E6AE-49A7-9A6E-299FC3E45626/data/Containers/Bundle/Application/F32A6911-BD5E-4BC7-91F2-5B6BB49AB20E/AwesomeProject.app/Users/xin/Library/Developer/CoreSimulator/Devices/6F4F3B99-E6AE-49A7-9A6E-299FC3E45626/data/Containers/Data/Application/1BEABA5F-AEF4-4B21-A0F8-DEEEA300EE1E/tmp/5F9E175A-0236-46B0-ABE3-DE85453B6F3F.jpg',
        }}
        style={{width: 300, height: 300}}
      /> */}
      {/* {imageUrls?.length > 0 &&
        imageUrls?.map(item => {
          return <Image source={{uri: item}} />;
        })} */}

      {imageUrls?.map((item, index) => {
        console.log('item', item);
        return (
          <Image
            key={index}
            source={{uri: item?.uri}}
            style={{width: 200, height: 200}}
          />
        );
      })}
    </View>
  );
}

export default NativePhoto;

const style = StyleSheet.create({
  wrap_box: {
    justifyContent: 'center',
    alignItems: 'center',
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
