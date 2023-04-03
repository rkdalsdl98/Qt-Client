import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, Callout } from "react-native-maps"
import { getPoints, getBetweenDistance } from "../../Funclibrary/ThridPartyFac";
import {LOCATION_UPDATE_INTERVAL} from "../../StaticData/MapParams";
import { alertMessage } from "../../Funclibrary/GlobalFunc";

import Loading from "../global/Loading";

import RunningMapStyles from "../../Styles/map/RunningMapStyles";

export default function RunningMap({view}) {
    const [lineState, setLineState] = useState(null) // 경로 정보 준비 상태
    const [lineCoords, setLineCoords] = useState([]) // 경로 정보를 담을 배열
    const [region, setRegion] = useState(null)

    const initLineCoords = _=> {
        try {
            const decodeDirections = getPoints(view.경로)
            const { latitudeDistance, longitudeDistance } = getBetweenDistance(decodeDirections[0], decodeDirections[decodeDirections.length - 1])
            setLineCoords(decodeDirections)
            setRegion({
                latitude: decodeDirections[0].latitude - latitudeDistance,
                longitude: decodeDirections[0].longitude - longitudeDistance,
                latitudeDelta: view.측정위도델타,
                longitudeDelta: view.측정경도델타
            })
        } catch(e) {
            console.log(e)
            alertMessage(
                '안내', 
                `경로를 로드하는데 실패 했습니다\n해당 문구와 함꼐 운영팀에 문의 해주세요.`
            )
        }

        setLineState('done')
    }
    useEffect(_=> {
        initLineCoords()
    }, [])
    return(
        <View style={RunningMapStyles.container}>
            {
                lineState === 'done'
                ?
                <MapView
                initialRegion={region}
                showsUserLocation={true}
                userLocationUpdateInterval={LOCATION_UPDATE_INTERVAL.ONE_SECONDS}
                zoomEnabled={true}
                rotateEnabled={false}
                scrollEnabled={true}
                moveOnMarkerPress={false}
                provider={PROVIDER_GOOGLE}
                style={RunningMapStyles.mapStyle}
                >
                    <Marker
                    coordinate={{latitude: lineCoords[0].latitude, longitude: lineCoords[0].longitude}}
                    >
                        <Callout>
                        <Text>출발 지점</Text>
                        </Callout>
                    </Marker>
                    <Marker
                    coordinate={{latitude: lineCoords[lineCoords.length - 1].latitude, longitude: lineCoords[lineCoords.length - 1].longitude}}
                    >
                        <Callout>
                        <Text>도착 지점</Text>
                        </Callout>
                    </Marker>
                    <Polyline
                    coordinates={lineCoords}
                    strokeColor='red'
                    strokeWidth={5}
                    />
                </MapView>
                :
                <Loading/>
            }
        </View>
    )
}