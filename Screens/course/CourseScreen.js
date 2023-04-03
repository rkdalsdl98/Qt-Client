import React, { useState } from "react";
import { View } from "react-native";

import RunningMap from "../../Components/map/RunningMap";
import ControlPanel from "../../Components/course/ControlPanel";
import courseScreenStyles from "../../Styles/course/courseScreenStyles";
import Loading from "../../Components/global/Loading";
import QRScanner from "../../Components/scanner/QRScanner";
import { alertMessage } from "../../Funclibrary/GlobalFunc";

import { saveJsonData, getJsonData, writeLog } from "../../Funclibrary/Storage";


export default function CourseScreen({navigation, route}) {
    const [showLoading, setShowLoading] = useState(false)
    const [scanned, setScanned] = useState(true)
    const [currentTime, setCurrentTime] = useState(null)
    const { playview } = route.params

    const loadingControll = state => setShowLoading(state)
    /**
     * 이 루틴은 고의적으로 활성 버튼을 눌러 시간을 멈춰두고
     * 코스를 끝 까지 진행한 이후 재개 하면 기록상 1초만에 완주한 걸로도 가능
     * 비정상 기록을 차단 하거나 재제하는 핸들링 필요함.
     */
    const handleScanner = (handleTimerFunc, currentTime) => {
        /** QR코드 스캐너 활성 버튼을 누를 시에 일단 일시정지 **/
        handleTimerFunc(false)
        alertMessage(
            '안내',
            'QR코드를 스캔하기 전 까지 다른 화면으로 넘어갈 수 없습니다\n스캔 화면으로 전환 하시겠습니까?',
            [
                {
                    text: '예',
                    onPress: _=> {
                        /** 화면 전환시 진행한 시간 저장, 스캐너 화면 전환 **/
                        setCurrentTime(currentTime)
                        setScanned(!scanned)
                    }
                },
                {
                    text: '아니오', 
                    /** 아닐 경우 일시정지 해제 **/
                    onPress: _=> handleTimerFunc(true), style: 'cancel'
                }
            ],
            {}
        )
    }
    const handleScanData = async ({ data }) => {
        setScanned(true)
        setShowLoading(true)
        const { reward, bonusReward, courseName } = JSON.parse(data)
        let { result, value } = await getJsonData('profile')
        const totalReward = ( Number(reward) + Number(bonusReward) )

        if(result === 'done') {
            const newValue = {
                ...value,
                point: value.point + totalReward
            }

            const controller = new AbortController()
            const { signal } = controller
            let timeOver = true

            setTimeout(_=> {
                if(timeOver) {
                    controller.abort()
                    alertMessage('안내', '요청시간을 초과했습니다.')
                }
            }, 5000)

            await fetch('http://localhost:3000/user/update', {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            headers: {'Content-type': 'application/json', 'authorization': null},
            body: JSON.stringify({
                data: newValue,
                id: value.userId
            }),
            signal
            })
            .then(data => data.json())
            .then(async json => {
                timeOver = false
                const { result } = json
                if(result === 'success') {
                    const saveResult = await saveJsonData('profile', newValue)

                    if(saveResult.result === 'done') {
                        await writeLog({time: currentTime, course: courseName, reward: totalReward})
                        alertMessage('안내', `코스 완주를 축하드립니다!\n${totalReward}P를 획득하셨습니다!`)
                    }
                    else alertMessage('안내', saveResult.message)
                } else {
                    const { message } = json
                    alertMessage('안내', message)
                }
            })
            .catch(e => {
                alertMessage('안내', '예기치 못한 오류가 발생했습니다\n몇번의 재시도에도 이 문구가 계속 나온다면 개발팀에 문의 해주세요')
            })
        } else {
            alertMessage('안내', '유저 정보를 불러오는데 실패 했습니다.')
        }
        setShowLoading(false)
        setCurrentTime(null)
        navigation.goBack()
    }

    return(
        <View style={courseScreenStyles.container}>
            {
                showLoading
                ?
                <Loading/>
                :
                null
            }
            {
                scanned
                ?
                null
                :
                <QRScanner
                aliveScanner={scanned}
                scanCallback={handleScanData}
                />
            }
            <RunningMap
            view={playview}
            />
            <ControlPanel 
            navigation={navigation}
            courseposition={playview}
            showLoading={loadingControll}
            handleScanner={handleScanner}
            />
        </View>
    )
}