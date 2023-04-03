/**
 * 이곳에 작성되는 함수의 최소 요건
 * 1. 순환 구조를 갖지 않는지
 * 2. 클래스와 결합성이 느슨한지
 * 3. 외부 라이브러리, 모듈에서 데이터를 가져와 리팩토링 하는지
 * 
 * 함수의 관한 설명이 있으면 좋고 없어도 상관은 없다.
 * 파라미터 타입에 대한 정보는 기입할 것.
 * 객체, 변수를 반환하는 함수는 반환 객체, 변수의 추상화된 정보를 입력할 것.
 */

import * as Location from 'expo-location'
import polyline from "@mapbox/polyline";

// 함수의 실행 결과 열거형 변수
const RETURN_STATE = [
    'DONE', // 정상 처리
    'FAILED', // 실패
    'NOT-FOUND', // 자료를 찾을 수 없음
    'RANGE-OVER', // 지정, 정해진 범위 초과
]

/**
 * 날씨 정보 요청함수
 * 
 * 에러 처리가 있습니다 반드시 체크 하는 구문을 넣어주세요.
 * @return {{weatherData: {tempture: {}, wind: Number, geoLocation: {}}, icon: string, result: RETURN_STATE}} 날씨 정보 오브젝트
 * 
 *  'DONE' 정상 처리
 * 
 *  'FAILED' 실패
 * 
 *  'NOT-FOUND' 자료를 찾을 수 없음
 * 
 *  'RANGE-OVER' 지정, 정해진 범위 초과
 */
export async function requestWeatherData() {
    let resultObj = {weatherData: undefined, icon: undefined, result: null}
    let { status } = await Location.requestForegroundPermissionsAsync() // 위치정보 권한 요청
    if (status !== 'granted') {
        return {message: '위치 권한을 허용하지 않을 경우 날씨 정보를 확인 할 수 없습니다.', result: RETURN_STATE[1]}
    }

    // 위도, 경도 받아오기
    const {coords: { latitude, longitude }} = await Location.getCurrentPositionAsync()
    // 지리적 위치 받아오기
    const geoLocation = await Location.reverseGeocodeAsync({latitude, longitude}, { useGoogleMaps: false })
    
    const controller = new AbortController()
    const { signal } = controller
    let abortRequest = true

    setTimeout(_=> {
        if(abortRequest) {
            controller.abort()
            const err = new Error('API서버와 연결이 되지 않습니다')
            err.name = RETURN_STATE[1]
            throw err
        }
    }, 5000)

    /* OpenWeather Api 정보 요청 */
    await fetch('http://14.37.243.67:3000/api/weather', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {'Content-type': 'application/json', 'authorization': null},
        body: JSON.stringify({latitude, longitude}),
        signal
    })
    .then(data => data.json())
    .then(json =>{
        abortRequest = false
        const { weatherData, result } = json
        if(result === 'success') {
            resultObj.weatherData = {
                tempture: weatherData.tempture,
                wind: weatherData.wind,
                geoLocation: {
                    region: geoLocation[0].region,
                    district: geoLocation[0].district,
                    street: geoLocation[0].street
                }
            }
            resultObj.icon = weatherData.weather.main
            resultObj.result = RETURN_STATE[0]
        } else if(result === 'failed') {
            const { message } = json
            return { message, result: RETURN_STATE[1] }
        } else if(result === 'not found') {
            const { message } = json
            return { message, result: RETURN_STATE[2] }
        }
    })
    .catch(e => {
        const err = new Error('API서버와 연결이 되지 않습니다')
        err.name = RETURN_STATE[1]
        throw err
    })

    return resultObj
}

/**
 * @param {LatLng} startLoc 시작 지점 
 * @param {LatLng} endLoc 도착 지점
 * @returns {{points: [], result: RETURN_STATE}} 시작 지점부터 도착 지점 까지의 정보를 담고 있는 오브젝트.
 * 
 *  'DONE' 정상 처리
 * 
 *  'FAILED' 실패
 * 
 *  'NOT-FOUND' 자료를 찾을 수 없음
 * 
 *  'RANGE-OVER' 지정, 정해진 범위 초과
 */
export function getPoints(directions) {
    let decodeDirections = polyline.decode(directions)
    let points = decodeDirections.map(dir => {
        let obj = {}
        obj.latitude = dir[0]
        obj.longitude = dir[1]
        return obj
    })

    return points
}

/**
 * 
 * @param {LatLng} sLatLng 시작 지점
 * @param {LatLng} eLatLng 끝 지점
 * @returns {{latitudeDistance: float, longitudeDistance: float}}
 */
export function getBetweenDistance(sLatLng, eLatLng) {
    return {
        latitudeDistance: (sLatLng.latitude - eLatLng.latitude) / 2,
        longitudeDistance: (sLatLng.longitude - eLatLng.longitude) / 2
    }
}

const RANGE = {
    SHORT: .0001,
    MIDEUM: .001,
    LARGE: .01
}

function normalizeLocation(location, standardrange) {
    if(!location) return null
    else {
        const { latitude, longitude } = location
        const latLng = latitude + longitude
        return latLng / 164
    }
}

export function checkValidLocation(userLocations, pointLocations, range) {
    if(userLocations === undefined || pointLocations === undefined) {
        const result = RETURN_STATE[2]
        return { result, message: '유저위치정보 또는 코스의 위치정보가 없습니다.' }
    } else {
        userLocations = normalizeLocation({
            latitude: userLocations.latitude,
            longitude: userLocations.longitude
        })
        const upperRange = normalizeLocation({
            latitude: pointLocations.latitude + (range !== undefined ? range : RANGE.SHORT),
            longitude: pointLocations.longitude + (range !== undefined ? range : RANGE.SHORT)
        })
        const lowerRange = normalizeLocation({
            latitude: pointLocations.latitude - (range !== undefined ? range : RANGE.SHORT),
            longitude: pointLocations.longitude - (range !== undefined ? range : RANGE.SHORT)
        })

        if(upperRange >= userLocations && lowerRange <= userLocations) {
            const result = RETURN_STATE[0]
            return { result }
        } else {
            const result = RETURN_STATE[1]
            return { result, message: '시작점과 너무 먼 거리에 위치해 있습니다.' }
        }
    }
}