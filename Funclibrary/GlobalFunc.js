/**
 * 이곳에 작성되는 함수의 최소 요건
 * 1. 순환 구조를 갖지 않는지
 * 2. 클래스와 결합성이 느슨한지
 * 
 * 함수의 관한 설명이 있으면 좋고 없어도 상관은 없다.
 * 파라미터 타입에 대한 정보는 기입할 것.
 * 객체, 변수를 반환하는 함수는 반환 객체, 변수의 추상화된 정보를 입력할 것.
 */

import { Alert } from "react-native"

/**
 * 
 * @param {string} title 헤더에 들어갈 텍스트
 * @param {string} message 바디에 담겨질 텍스트
 * @param {Object} style 메세지 스타일 입력하지 않으면 기본값으로 대체 됩니다
 * @param {Object} option 메세지 옵션 입력하지 않으면 기본값으로 대체 됩니다
 * @returns {(title, message, style, option)=> void}}
 */
export function alertMessage(title, message, style, option) {  
    style = style === undefined ? [{text: '확인',style: 'cancel',}] : style
    option = option === undefined ? {cancelable: true,} : option
    Alert.alert(title, message, style, option)
}

import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

/**
 * 스택 오버플로우 에서 줍줍해온 정규화 코드
 * @param {Number} size 
 * @returns {Number}
 */
export function normalizeSize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

/**
 * @returns {{date: {Day: Number,Month: Number, Year: Number}, time: {Hour: Number, Minute: Number}}} 
 */
export function getClock() {
        const startTime = new Date()
        
        const day = ("0" + startTime.getDate()).slice(-2)
        const month = ("0" + (startTime.getMonth() + 1)).slice(-2)
        const year = startTime.getFullYear()
        const hours = startTime.getHours();
        const minutes = startTime.getMinutes();

        return {
            date: {
                'Day': day, 
                'Month': month, 
                'Year': year
            },
            time: {
                'Hour': hours,
                'Minute': minutes,
            }
        }
}

import * as Location from 'expo-location'

export async function requestPermission() {
  let { status } = await Location.requestForegroundPermissionsAsync() // 위치정보 권한 요청
  if (status !== 'granted') {
      return null
  }
  return status
}

import { BarCodeScanner } from "expo-barcode-scanner";

export async function requestCameraPermission() {
  const { status } = await BarCodeScanner.requestPermissionsAsync()
  return status
}