export interface ILocationPosition {
  longitude: number; //gps精度
  latitude: number; //gps纬度
  address: String; //详细地理位置信息
  currentTime: String; //当前时间
  realErrorDistance?: number; //与另一个经纬度的实际误差距离
  gdLongitude?: number; //高德经度
  gdLatitude?: number; //高德纬度
}
