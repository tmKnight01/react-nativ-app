import {Platform, PermissionsAndroid, Modal, Alert} from 'react-native';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import Geolocation from '@react-native-community/geolocation';
import dayjs from 'dayjs';
/*
获取定位的初始化函数
*/
// export function getPositionInit() {
//   if (Platform.OS === 'android') {
//     LocationServicesDialogBox.checkLocationServicesIsEnabled({
//       message: '<h2>开启位置服务</h2>开启位置服务，获取精准定位<br/>',
//       ok: '去开启',
//       cancel: '取消',
//       enableHighAccuracy: true,
//       showDialog: true,
//       openLocationServices: true,
//       preventOutSideTouch: false,
//       preventBackClick: false,
//       providerListener: true,
//     }).then(async sussess => {
//       console.log('获取gps成功', success);
//     });
//   }
// }
const GaoDe_Key = 'c6200f57004eee045672aefd173a0828';

export function getPositionInit() {
  // //如果使用高德定位，则设置高德key与需要逆地理编码的属性；如果不使用高德定位则注释掉下面代码
  // await init({
  //     ios: '[你的高德ios key]',
  //     android: "[你的高德android key]"// 传入AMAP_KEY
  // });
  // // android 需要逆地理编码
  // setNeedAddress(true);
  // // ios 需要逆地理编码
  // setLocatingWithReGeocode(true);

  if (Platform.OS === 'android') {
    //获取gps位置是否打开
    return LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: '<h2>开启位置服务</h2>开启位置服务，获取精准定位<br/>',
      ok: '去开启',
      cancel: '取消',
      enableHighAccuracy: true,
      showDialog: true,
      openLocationServices: true,
      preventOutSideTouch: false,
      preventBackClick: false,
      providerListener: true,
    }).then(async function (success) {
      console.log('获取gps成功', success);

      const permissions = [
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ];
      const granteds = await PermissionsAndroid.requestMultiple(permissions);
      console.log('granteds====', granteds);
      if (
        granteds['android.permission.ACCESS_FINE_LOCATION'] === 'granted' &&
        granteds['android.permission.ACCESS_COARSE_LOCATION'] === 'granted'
      ) {
        return true;
      } else {
        Alert.alert(
          '请开启定位权限',
          '请开启获取手机位置服务，否则系统部分功能将无法使用',
          [
            {
              text: '开启',
              onPress: () => {
                console.log('点击开启按钮');
                if (
                  granteds['android.permission.ACCESS_FINE_LOCATION'] ===
                    'never_ask_again' &&
                  granteds['android.permission.ACCESS_COARSE_LOCATION'] ===
                    'never_ask_again'
                ) {
                  Alert.alert(
                    '警告',
                    '您将应用获取手机定位的权限设为拒绝且不再询问，功能无法使用!' +
                      '想要重新打开权限，请到手机-设置-权限管理中允许[你的应用名称]app对该权限的获取',
                  );
                  return false;
                } else {
                  //短时间第二次可以唤醒再次请求权限框，但是选项会从拒绝变为拒绝且不再询，如果选择该项则无法再唤起请求权限框
                  getPositionInit();
                }
              },
            },
            {
              text: '拒绝授权',
              onPress: () => {
                return false;
              },
            },
          ],
        );
      }
    });
  }
}

export function requestGetGeoPosition(
  setLocation?: Function,
  setAddress?: Function,
  isToGD?: Boolean,
  targetCoordinate?: coordinate,
  setCurrentError?: Function,
  setGDLocation?: Function,
) {
  return new Promise((resolve, reject) => {
    const config = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 3600000,
    };

    Geolocation.getCurrentPosition(
      async position => {
        console.log('原生获取经纬度=======', position);
        if (setLocation && typeof setLocation === 'function') {
          console.log('set GPS经纬度');
          setLocation({
            longitude: getBit(position.coords.longitude, 6),
            latitude: getBit(position.coords.latitude, 6),
          });
        }

        // let serverTime = '';
        // serverTime = await getServerTime().catch(err => {
        //   console.log('获取服务器时间接口捕获错误：', err);
        // });
        let time = dayjs().format('YYYY-mm-dd HH:MM:SS');

        let result;
        result = {
          longitude: getBit(position.coords.longitude, 6),
          latitude: getBit(position.coords.latitude, 6),
          currentTime: time,
        };

        if (isToGD) {
          let data = await getGDLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log('gps转为高德坐标系===========', data);
          if (setGDLocation && typeof setGDLocation === 'function') {
            setGDLocation(data);
          }
          result = {
            ...result,
            gdLongitude: data.longitude,
            gdLatitude: data.latitude,
          };

          if (setAddress && typeof setAddress === 'function') {
            let addressStr;
            addressStr = await getAddressService(data);
            console.log('address----------', addressStr);
            setAddress(addressStr);
            result = {
              ...result,
              address: addressStr,
            };
          }
        }

        if (
          targetCoordinate &&
          setCurrentError &&
          typeof setCurrentError === 'function'
        ) {
          let distance = 0;
          distance = getDistance(
            targetCoordinate,
            {
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
            },
            1,
          );
          console.log('目标经纬度与当前gps经纬度的对比距离为', distance);
          result = {
            ...result,
            realErrorDistance: distance,
          };
        }
        //最终返回数据
        console.log('原生获取经纬度最后所得结果：', result);

        resolve(result);
      },
      error => {
        console.log('原生获取错误', error);
      },
      config,
    );
  });
}

const getNetData = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      .then(responseData => {
        console.log('responseData', responseData);
        resolve(responseData);
      })
      .catch(error => {
        reject(error);
      });
  });
};

//获取城市定位信息，逆地理编码
const getAddressService = locationObj => {
  const GaoDe_URL = `https://restapi.amap.com/v3/geocode/regeo?key=${GaoDe_Key}&radius=1000&extensions=all&poitype=商务写字楼&location=`;
  return new Promise((resolve, reject) => {
    if (locationObj && locationObj !== {}) {
      let longitude = locationObj.longitude;
      let latitude = locationObj.latitude;
      //高德逆地理编码接口
      const requestUrl = GaoDe_URL + longitude + ',' + latitude;
      console.log('请求API', requestUrl);
      getNetData(requestUrl)
        .then(data => {
          console.log('高德地图：', data);
          //高德地图获取数据
          if (data.status == 1) {
            resolve(data.regeocode.formatted_address);
          } else {
            reject(data.code);
          }
        })
        .catch(data => {
          reject(data.code);
        });
    }
  });
};

//将gps坐标转为高德坐标
const getGDLocation = gpsLocation => {
  return new Promise((resolve, reject) => {
    let url = `https://restapi.amap.com/v3/assistant/coordinate/convert?key=${GaoDe_Key}&locations=${gpsLocation.longitude},${gpsLocation.latitude}&coordsys=gps`;
    getNetData(url)
      .then(data => {
        if (data && data.locations) {
          const gdLocation = {
            latitude: parseFloat(
              data.locations.slice(data.locations.indexOf(',') + 1),
            ),
            longitude: parseFloat(
              data.locations.slice(0, data.locations.indexOf(',')),
            ),
          };
          resolve(gdLocation);
        } else {
          console.error('gps转高德请求接口报错');
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
function getBit(value: number, decimalPlaces: number) {
  const factor = Math.pow(10, decimalPlaces);
  const roundedValue = Math.round(value * factor) / factor;
  return roundedValue;
}
