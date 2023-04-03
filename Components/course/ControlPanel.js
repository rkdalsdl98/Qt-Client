import React, {useState, useEffect} from "react";
import { TouchableOpacity, View, Text, BackHandler, Image } from "react-native";
import { Stopwatch } from 'react-native-stopwatch-timer';
import { normalizeSize, requestPermission } from "../../Funclibrary/GlobalFunc";
import { alertMessage } from "../../Funclibrary/GlobalFunc";
import { checkValidLocation, getPoints } from "../../Funclibrary/ThridPartyFac";
import * as Location from 'expo-location'

import courseScreenStyles from "../../Styles/course/courseScreenStyles";

export default function ControlPanel({navigation, courseposition, showLoading, handleScanner}) {
    const [isStopWatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const [currentTime, setCurrentTime] = useState(null)

    const backAction = _=> {
        alertMessage(
            '그만두기', 
            '진행 중인 기록은 모두 사라집니다\n정말 종료 하시겠습니까?',
            [{text: '예', onPress: _=> navigation.goBack()},{text: '아니오', onPress: _=> null, style: 'cancel'}],
            {}
        )
        return true
    }

    const onPressQR = _=> {
        if(isStopWatchStart) handleScanner(setIsStopwatchStart, currentTime)
        else alertMessage('안내', '코스를 진행중인 경우에만 사용 가능합니다.')
    }

    const onPressStart = async _=> {
        showLoading(true)
        if(isStopWatchStart) {
            alertMessage('안내', '이미 코스를 진행중 입니다.')
            return
        }
        const permission = await requestPermission()
        if(!permission) {
            alertMessage('안내', '위치정보를 허용하지 않으면 서비스를 이용하실 수 없습니다.')
            return
        }
        
        /** 내 위치 가져오기 **/
        let location = await Location.getCurrentPositionAsync({}) // 기본 위치정보 연결
        const {longitude, latitude} = location.coords // 위도, 경도분할

        /** 코스에 시작위치만 가져오기 **/
        const decodePosition = getPoints(courseposition.경로)[0]
        const {latitude: pointLatitude, longitude: pointLongitude} = decodePosition

        /** 시작하기에 유효한 위치인지 **/
        const { result, message } = checkValidLocation(
            {latitude, longitude},
            {latitude, longitude}
            //{latitude: pointLatitude, longitude: pointLongitude}
        )

        if(result === 'DONE') {
            setIsStopwatchStart(true)
            setResetStopwatch(false)
        } else alertMessage('안내', message)
        showLoading(false)
    }
    
    useEffect(_=> {
        BackHandler.addEventListener('hardwareBackPress', backAction)
        return _=> BackHandler.removeEventListener('hardwareBackPress', backAction)
    }, [])
    return(
        <View style={courseScreenStyles.controlPanelWarpper}>
            <View style={courseScreenStyles.courseProgressWrapper}>
                <View style={courseScreenStyles.timerWrapper}>
                    <Text style={courseScreenStyles.textStyle}>소요시간</Text>
                    <Stopwatch 
                        labs 
                        start={isStopWatchStart}
                        reset={resetStopwatch}
                        options={timerStyle}
                        getTime={time => setCurrentTime(time)}
                    />
                </View>
                <View style={courseScreenStyles.distanceWrapper}>
                    <Text style={courseScreenStyles.textStyle}>총 거리</Text>
                    <Text style={courseScreenStyles.textStyle}>남은 거리</Text>
                </View>
            </View>
            <View style={courseScreenStyles.buttonWrapper}>
                <TouchableOpacity 
                    style={courseScreenStyles.buttonStyle}
                    activeOpacity={.6}
                    onPress={onPressStart}
                >
                    <Text style={courseScreenStyles.buttonTextStyle}>시작</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    activeOpacity={.6}
                    style={courseScreenStyles.buttonStyle}
                    onPress={backAction}
                >
                    <Text style={courseScreenStyles.buttonTextStyle}>중지</Text>
                </TouchableOpacity>
            </View>
            <View style={courseScreenStyles.QRBtnWrapper}>
                <TouchableOpacity
                style={courseScreenStyles.QRBtn}
                onPress={onPressQR}
                >
                    <Image 
                    style={{width: '50%', height: '50%'}}
                    source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/yami-533cf.appspot.com/o/img%2Fqrcode.png?alt=media&token=bb47fd26-19e9-4e4d-92db-ef8a7f821664'
                    }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const timerStyle = {
    container: {
        flex: 1,
    },
    text: {
      fontSize: normalizeSize(20),
      color: 'black',
    },
  };