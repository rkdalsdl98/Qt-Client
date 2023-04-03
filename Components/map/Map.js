import React, {useState, useEffect} from "react"
import { View, StyleSheet } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import * as Location from 'expo-location'
import { alertMessage, requestPermission } from "../../Funclibrary/GlobalFunc"
import { LAT_LNG_DELTA, LOCATION_UPDATE_INTERVAL } from "../../StaticData/MapParams"

import CourseMarker from "./CourseMarker"
import Loading from "../global/Loading"

export default function Map({route}) {
    const [coords, setCoords] = useState({})
    const [state, setState] = useState(false)
    const [marker, setMarker] = useState(null)

    const initialLocations = async _=> {
        setState(false)
        try {
            if(route.params !== undefined) {
                const { preview, marker: newMarker, position } = route.params
                const [ latitude, longitude ] = position
                setCoords({
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                    latitudeDelta: preview.미리보기위도델타,
                    longitudeDelta: preview.미리보기경도델타
                })
                setMarker({description: newMarker.마커설명, latitude: Number(latitude), longitude: Number(longitude)})
            } else {
                const permission = await requestPermission()
                if(!permission) {
                    alertMessage('안내', '위치 권한을 허용하지 않을 경우 지도 정보를 확인 할 수 없습니다.')
                    return false
                }
            
                let location = await Location.getCurrentPositionAsync({}) // 기본 위치정보 연결
                const {longitude, latitude} = location.coords // 위도, 경도분할

                setCoords({longitude, latitude})
            }

            setState(true)
            return true
        } catch(e) {
            console.log(e)
        }
    }
    const initialize = async _=> {
        const locationState = await initialLocations()
        if(!locationState) {
            alertMessage('안내', '위치 정보를 가져오는데 실패 했습니다')
            setState(true)
        }
    }
    useEffect(_=> {
        initialize()
    }, [])

    return (
        <View style={styles.container}>
            { !state 
            ? 
            <Loading/>
            :
            <MapView 
            initialRegion={{
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: coords.latitudeDelta ? coords.latitudeDelta : LAT_LNG_DELTA.DEFAULT[0],
                longitudeDelta: coords.longitudeDelta ? coords.longitudeDelta : LAT_LNG_DELTA.DEFAULT[1],
            }}
            showsUserLocation={true}
            userLocationUpdateInterval={LOCATION_UPDATE_INTERVAL.ONE_SECONDS}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            onRegionChangeComplete={e => setCoords({latitude: e.latitude, longitude: e.longitude})}
            >
                {
                    marker
                    ?
                    <CourseMarker
                    coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                    description={marker.description}
                    />
                    :
                    null
                }
            </MapView>
            }   
        </View>
    )
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
  })