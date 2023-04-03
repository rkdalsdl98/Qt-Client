import React, {useState, useEffect} from "react";
import { View, ActivityIndicator } from "react-native"
import { requestWeatherData } from "../../Funclibrary/ThridPartyFac";
import { alertMessage } from "../../Funclibrary/GlobalFunc";

import weatherMainStyles from "../../Styles/weather/weatherMainStyles";
import WeatherBody from "./WeatherBody";
import WeatherDate from "./WeatherDate";

export default function Weather() {
    /*리액트 변수 */
    const [status, setStatus] = useState(null) // 준비상태
    const [weatherData, setWeatherData] = useState({}) // 날씨 정보
    const [icon, setIcon] = useState('') // 날씨 이미지 정보

    const refresh = async () => {
        setStatus(null)
        try {
            const weatherObj = await requestWeatherData()
            const { result } = weatherObj
            if(result === 'FAILED') {
                const { message } = weatherObj
                alertMessage('안내', message)
            } else if(result === 'DONE') {
                const { weatherData, icon } = weatherObj
                setWeatherData(weatherData)
                setIcon(icon)
            } else if(result === 'NOT-FOUND') {
                const { message } = weatherObj
                alertMessage('안내', message)
            }
            setStatus('done')
        } catch(e) {
            if(e.name === 'FAILED') {
                alertMessage(
                    '안내', 
                    `${e.message}`
                )
                setStatus('done')
            }
        }
    }
    
    useEffect(_=> {
        refresh()
    }, [])
    return(
        <View style={weatherMainStyles.container}>
            {
                status === 'done' 
                ?
                <View style={weatherMainStyles.weatherWrapper}>
                    <WeatherBody weatherData={weatherData} icon={icon}/>
                    <WeatherDate refresh={refresh}/>
                </View>
                :
                <View 
                style={
                    {
                        flex:1, 
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }>
                    <ActivityIndicator
                    size='large'
                    color='black'
                    />
                </View>
            }
        </View>
    )
}