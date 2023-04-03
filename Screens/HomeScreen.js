import React, {useState, useEffect} from "react";
import { View, BackHandler, ToastAndroid, Platform } from "react-native";
import { alertMessage } from "../Funclibrary/GlobalFunc";
import { saveJsonData } from "../Funclibrary/Storage";

import HomeMain from "../Components/home/HomeMain";
import LoginMain from "../Components/home/login/LoginMain";
import Menubar from "../Components/home/Menubar";

import globalHeader from "../Styles/global/globalHeader";
import screenStyles from "../Styles/home/screenStyles";

export default function HomeScreen({navigation}) {
    let time = 0

    const [logined, setLogined] = useState(null)
    const [showLoading, setShowLoading] = useState(false)
    const toastAndroidBackHandler = _=> ToastAndroid.show("'뒤로' 버튼을  한번 더 누르시면 종료됩니다.", ToastAndroid.SHORT)
    const backAction = _=> {
        const canBack = navigation.canGoBack()
        if(canBack) navigation.goBack()
        else {
            if(Platform.OS === 'ios') {
                alertMessage(
                    '안내',
                    'Qt를 종료 하시겠습니까?',
                    [
                        {
                            text: '예',
                            onPress: _=> { BackHandler.exitApp() }
                        },
                        {
                            text: '아니오',
                            style: 'cancel'
                        }
                    ]
                    )
            } else {
                ++time
                if(time === 2) BackHandler.exitApp()
                else {
                    toastAndroidBackHandler()
                    setTimeout(_=> time = 0, 2000)
                }
            }
        }
        return true;
    }

    /**
     * 사용자 정보 초기화 함수
     * @param {*} profile 
     */
    const initialize = async profile => {
        const parsingProfile = JSON.parse(profile.replace(/\\/g, ''))
        const saveResult = await saveJsonData('profile', parsingProfile)
        const { result } = saveResult
        
        if(result === 'done') {
            setLogined('성공')
            navigation.setOptions(globalHeader)
        } else if(result === 'failed') {
            const { message } = saveResult
            alertMessage('안내', message)
        } else if(result === 'unexpected error') {
            const { message } = saveResult
            alertMessage('안내', message)
        }
        setShowLoading(false)
    }
    
    /**
     * @param {Object} user 
     */
    const login = async user => {
        setShowLoading(true)
        const controller = new AbortController()
        const { signal } = controller
        let timeOver = true

        setTimeout(_=> {
            if(timeOver) {
                controller.abort()
                setShowLoading(false)
            }
        }, 5000)
        
        try {
            const request = await fetch('http://14.37.243.67:3000/user/login', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                body: JSON.stringify(user),
                signal
            })
            
            const json = await request.json()
            timeOver = false

            const {code, message, userData} = json
            if(code === 404) {
                alertMessage('알림', `${message}`)
                setShowLoading(false)
            } else if(code === 200) {
                const { profile } = userData
                initialize(profile)
            }
        } catch (e) {
            alertMessage('안내', '로그인 서버에 접속할 수 없습니다\n운영진에게 해당 내용과 함께 문의해주세요')
            setShowLoading(false)
        }
    }

    useEffect(_=> {
        navigation.setOptions({headerRight: null})
        BackHandler.addEventListener("hardwareBackPress", backAction)
        return _=> BackHandler.removeEventListener("hardwareBackPress", backAction)
    }, [])
    // 스크린 마다 개별 이벤트를 넣을 수 있음.

    return(
        <View style={screenStyles.container}>
            <View style={{flex: 1}}>
                <HomeMain></HomeMain>
                <Menubar></Menubar>
            </View>
            {/* {
                logined === '성공'
                ?
                <View style={{flex: 1}}>
                    <HomeMain></HomeMain>
                    <Menubar></Menubar>
                </View>
                :
                <View style={{flex: 1}}>
                    <LoginMain
                        loginHandler={login}
                        showLoading={showLoading}
                    />
                </View>
            } */}
        </View>
    )
}