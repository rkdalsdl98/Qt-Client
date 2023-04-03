import React from "react";
import { View, Text } from "react-native";

import ReportStyles from "../../Styles/mypage/ReportStyles";

export default function Report() {
    return(
        <View style={ReportStyles.container}>
            <View style={ReportStyles.reportWrapper}>
                <Text>공지사항</Text>
            </View>
        </View>
    )
}