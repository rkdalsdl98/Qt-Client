import React from "react";
import { View, Text } from "react-native";
import logStyles from "../../Styles/global/logStyles";

export default function Log({logData}) {
    const { course, time, reward } = logData
    return (
        <View style={logStyles.container}>
            <View style={logStyles.nameWrapper}>
                <Text style={logStyles.defaultText}>{course} 완주내역</Text>
            </View>
            <View style={logStyles.dataWrapper}>
                {time && <Text style={logStyles.defaultText}> {time}</Text>}
                {reward && <Text style={logStyles.rewardText}> +{reward}P</Text>}
            </View>
        </View>
    )
}