import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getJsonData } from "../../Funclibrary/Storage";

import HistoryStyles from "../../Styles/mypage/HistoryStyles";
import { alertMessage } from "../../Funclibrary/GlobalFunc";

export default function History({profileData}) {
    const navigation = useNavigation()
    const loadData = async _=> {
        const logs = await getJsonData('logs')
        const { result, value } = logs

        if(result === 'done') {
            const keys = Object.keys(value)
            const runnings = []
            const points = []

            keys.forEach(key => {
                const { course, reward, time } = value[key]
                runnings.push({
                    course,
                    time
                })
                points.push({
                    course,
                    reward
                })
            })

            setPointHistorys(points)
            setRunningHistorys(runnings)
        } else if(result === 'failed') alertMessage('안내', '로그를 가져오는데 실패했습니다.')
    }
    const onPressEvent = (logName) => {
        switch(logName) {
            case 'running':
                navigation.navigate('history', { historyData: runningHistorys, profile: profileData })
                break
            case 'point':
                navigation.navigate('history', { historyData: pointHistorys, profile: profileData })
                break
            case 'achievements':
                break
            default:
                alertMessage('안내', '예기치 못한 오류가 발생했습니다.')
                break
        }
    }

    const [runningHistorys, setRunningHistorys] = useState(null)
    const [pointHistorys, setPointHistorys] = useState(null)

    useEffect(_=> {
        loadData()
    }, [])
    return(
        <View style={HistoryStyles.container}>
            <View style={HistoryStyles.historyWrapper}>
                <TouchableOpacity
                onPress={_=> onPressEvent('running')}
                >
                    <Text>완주/진행 내역</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={_=> onPressEvent('point')}
                >
                    <Text>포인트 내역</Text>
                </TouchableOpacity><TouchableOpacity>
                    <Text>업적 달성 내역</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}