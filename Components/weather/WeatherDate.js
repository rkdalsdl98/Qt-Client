import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import weatherDateStyles from "../../Styles/weather/weatherDateStyles";
import { getClock } from "../../Funclibrary/GlobalFunc";

export default function WeatherDate({refresh}) {
    const [date, setDate] = useState({})
    const [time, setTime] = useState({})
    const [done, setDone] = useState(false)
    const setClock = (newDate, newTime)=>{
        setDate(newDate)
        setTime(newTime)
        setDone(true)
    }
    useEffect(_=> {
        const {date, time} = getClock()
        setClock(date, time)
    }, [])

    return(
        <View style={weatherDateStyles.container}>
            {
                done ? 
                <View style={weatherDateStyles.wrapper}>
                    <View style={weatherDateStyles.dateWrapper}>
                        <Text style={weatherDateStyles.dateTextStyle}>업데이트 시각: {date.Year}.{date.Month}.{date.Day} {time.Hour}:{time.Minute}</Text>
                    </View>
                    <View style={weatherDateStyles.refreshWrapper}>
                        <TouchableOpacity style={weatherDateStyles.refreshBtnStyle} onPress={refresh}>
                            <Image style={weatherDateStyles.refreshIconStyle} source={require('../../Styles/img/icons/refreshIcon2.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <Text>...로딩 중</Text>
            }
        </View>
    )
}