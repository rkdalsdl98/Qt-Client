import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Log from "../../Components/mypage/Log";

import MyPageHeaderStyles from "../../Styles/mypage/MyPageHeaderStyles";
import HistoryScreenStyles from "../../Styles/mypage/HistoryScreenStyles";

const HistoryPageHeaderStyles = {...MyPageHeaderStyles}
HistoryPageHeaderStyles.headerRight = _=> (<View></View>)
HistoryPageHeaderStyles.title = '기록'

export default function HistoryScreen({navigation, route}) {
    const { historyData, profile } = route.params
    useEffect(_=> {
        navigation.setOptions(HistoryPageHeaderStyles)
    }, [])
    
    return (
        <View style={HistoryScreenStyles.container}>
            <View
            style={HistoryScreenStyles.userContainer}
            >
                <Text style={HistoryScreenStyles.userInfoText}>{profile.nickname}님의 포인트</Text>
                <Text style={HistoryScreenStyles.pointLarge}>{profile.point}P</Text>
            </View>
            <View
            style={HistoryScreenStyles.infoBtnContainer}
            >
                <TouchableOpacity
                style={HistoryScreenStyles.infoBtn}
                activeOpacity={.6}
                >
                    <Text style={HistoryScreenStyles.defaultText}>포인트 정보</Text>
                </TouchableOpacity>
            </View>
            <View
            style={HistoryScreenStyles.logsContainer}
            >
                <ScrollView
                >
                    {
                        historyData.map((data, key) => (
                            <Log
                            logData={data}
                            key={key}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}