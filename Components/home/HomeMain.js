import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { normalizeSize } from "../../Funclibrary/GlobalFunc";
import { alertMessage } from "../../Funclibrary/GlobalFunc";
import { getJsonData } from "../../Funclibrary/Storage";

import homeMainStyles from "../../Styles/home/homeMainStyles";

import NearestPlace from "./NearestPlace";
import TransferCourse from "./TransferCourse";
import Weather from "../weather/Weather";
import MenualButton from "../MenualButton";

export default function HomeMain() {
    const noticeEvent = async _=> alertMessage('공지', '그딴거 없지롱')
    return(
        <View style={homeMainStyles.container}>
            <Weather></Weather>
            <View style={lastelyRecordStyle}>
                <Text>최근기록</Text>
            </View>
            <TransferCourse></TransferCourse>
            <NearestPlace></NearestPlace>
            <MenualButton
                innerText='새로운 공지사항을 확인하세요!'
                onPressEvent={noticeEvent}
                customStyle={customBtnStyle}
            />
        </View>
    )
}

const customBtnStyle = StyleSheet.create({
    container: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: normalizeSize(10),
        padding: 5
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f1f3f5',
        borderRadius: 18,
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderColor: '#f1f3f5',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: normalizeSize(300),
    },
    textStyle: {
        fontSize: normalizeSize(14),
        fontWeight: '500',
    }
})
const lastelyRecordStyle = StyleSheet.create({
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
})

// 하늘색 '#e6f4fa'