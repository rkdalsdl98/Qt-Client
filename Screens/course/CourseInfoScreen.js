import React, {useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { alertMessage, requestCameraPermission } from "../../Funclibrary/GlobalFunc";

import courseInfoStyle from "../../Styles/course/courseInfoStyle";

export default function CourseInfoScreen({navigation, route}) {
    const { address, position, detail, contentProvider, preview, playview, marker } = route.params
    const navigate = useNavigation()
    const mapPressEvent = _=> navigate.navigate('map', { preview, marker, position })
    const startPressEvnet = async _=> {
        const status = await requestCameraPermission()
        if(status === 'granted') navigate.navigate('course', { playview })
        else alertMessage('안내', '카메라 권한을 허용 해주세요.')
    }

    useEffect(_=> navigation.setOptions({title: contentProvider.타이틀}), [])
    return(
        <View style={courseInfoStyle.container}>
            <View style={courseInfoStyle.textWrapper}>
                <Text style={courseInfoStyle.textStyle}>{contentProvider.설명}</Text>
            </View>
            <View style={courseInfoStyle.infoWrapper}>
                <Text style={courseInfoStyle.textStyle}>난이도:  {detail.난이도}단계</Text>
                <Text style={courseInfoStyle.textStyle}>거리:  {detail.거리}km</Text>
                <Text style={courseInfoStyle.textStyle}>예상소요시간:  {detail.기대시간}분</Text>
            </View>
            <View style={courseInfoStyle.mapContainer}>
                <MapView
                    initialRegion={{
                        latitude: Number(position[0]),
                        longitude: Number(position[1]),
                        latitudeDelta: preview.미리보기위도델타,
                        longitudeDelta: preview.미리보기경도델타,
                    }}
                    provider={PROVIDER_GOOGLE}
                    zoomEnabled={false}
                    scrollEnabled={false}
                    rotateEnabled={false}
                    onPress={mapPressEvent}
                    style={courseInfoStyle.mapStyle}
                >
                </MapView>
            </View>
            <View style={courseInfoStyle.placeWrapper}>
                    <Text style={courseInfoStyle.placeHeaderStyle}>위치</Text>
                    <Text style={courseInfoStyle.placeTextStyle}>{address.상세주소}</Text>
            </View>
            <TouchableOpacity 
                activeOpacity={.8} 
                style={courseInfoStyle.startButtonStyle}
                onPress={startPressEvnet}
            >
                <Text style={courseInfoStyle.startTextStyle}>측정하기</Text>
            </TouchableOpacity>
        </View>
    )
}