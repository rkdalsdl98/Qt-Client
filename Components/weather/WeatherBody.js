import React from "react";
import { View, Text } from "react-native";

import WeatherTextData from "../../StaticData/WeatherData";
import weatherBodyStyles from "../../Styles/weather/weatherBodyStyles";

export default function WeatherBody({weatherData, icon}) {
    const {tempture, wind, geoLocation} = weatherData
    const [weatherIcon, weather, comment] = WeatherTextData[icon]

    return(
        <View style={weatherBodyStyles.container}>
            <View style={weatherBodyStyles.textContainer}>
                <View style={weatherBodyStyles.cityTextWrapper}>
                    <Text style={weatherBodyStyles.cityTextStyle}>{geoLocation === undefined ? '/' : `${geoLocation.region} ${geoLocation.district}`}</Text>
                </View>
                <View style={weatherBodyStyles.tempTextWrapper}>
                    <Text style={weatherBodyStyles.tempTextStyle}>{tempture === undefined ? '0' : parseInt(tempture.temp)}°</Text>
                </View>
                <View style={weatherBodyStyles.commentWrapper}>
                    <Text style={weatherBodyStyles.commentStyle}>{comment === undefined ? '날씨 정보를 불러오는데 실패했습니다\n재 요청 버튼을 눌러주세요' : comment}</Text>
                </View>
            </View>
            <View style={weatherBodyStyles.tempContainer}>
                <View style={weatherBodyStyles.tempDetailContainer}>
                    <Text style={weatherBodyStyles.tempDetailTextStyle}>{weather === undefined ? '' : weather} / {weatherIcon === undefined ? '' :weatherIcon}</Text>
                    <Text style={weatherBodyStyles.tempDetailTextStyle}>최고/최저: {tempture === undefined ? '' : tempture.temp_max}°/{tempture === undefined ? '' : tempture.temp_min}°</Text>
                    <Text style={weatherBodyStyles.tempDetailTextStyle}>체감온도: {tempture === undefined ? '' : tempture.feels_like}°</Text>
                    <Text style={weatherBodyStyles.tempDetailTextStyle}>풍속: {wind === undefined ? '' : wind.speed} m/s</Text>
                    <Text style={weatherBodyStyles.tempDetailTextStyle}>압력: {tempture === undefined ? '' : tempture.pressure} hPa</Text>
                </View>
            </View>
        </View>
    )
}