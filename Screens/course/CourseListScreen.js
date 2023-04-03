import React, {useEffect, useState} from "react";
import { View, ScrollView, Text } from "react-native";
import { alertMessage } from "../../Funclibrary/GlobalFunc";
import { checkValidLocation } from "../../Funclibrary/ThridPartyFac";
import * as Location from 'expo-location'

import CourseItem from "../../Components/course/CourseItem";
import courseListStyle from "../../Styles/course/courseListStyle";
import Menubar from "../../Components/home/Menubar";
import Loading from "../../Components/global/Loading";

const listDataInterface = {
    URI: 'image',
    거리: 'detail',
    난이도: 'detail',
    기대시간: 'detail',
    상세주소: 'address',
    도시: 'address',
    구: 'address',
    장소이름: 'contentProvider',
    타이틀: 'contentProvider',
    설명: 'contentProvider',
    위치: 'position',
    미리보기위도델타: 'preview',
    미리보기경도델타: 'preview',
    경로: 'playview',
    마커설명: 'marker',
    측정위도델타: 'playview',
    측정경도델타: 'playview'
}

function manufactureCourseData(standardData) {
    const courselist = []
    standardData.forEach(data => {
        const keys = Object.keys(data)
        let course = {
            image: {},
            detail: {},
            address: {},
            contentProvider: {},
            position: {},
            preview: {},
            playview: {},
            marker: {}
        }

        keys.forEach(key => {
            if(listDataInterface[key] !== undefined) {
                if(key === '위치') {
                    const LatLng = data[key].split(',')
                    
                    const interfacename = listDataInterface[key]
                    course[interfacename] = LatLng
                } else {
                    const interfacename = listDataInterface[key]
                    course[interfacename][key] = data[key]
                }
            }
        })
        courselist.push(course)
    })
    return courselist
}

export default function CourseListScreen({route}) {
    const [showLoading, setShowLoading] = useState(true)
    const [courseList, setCourseList] = useState(null)
    const [ready, setReady] = useState(null)

    const requestListData = async _=> {
        const controller = new AbortController()
        const { signal } = controller
        let abortRequest = true

        setTimeout(_=> {
            if(abortRequest) {
                controller.abort()
                alertMessage('안내', '코스 정보를 불러오는데 실패했습니다.')
                setShowLoading(false)
            }
        }, 5000)

        await fetch('http://localhost:3000/course/list', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {'Content-type': 'application/json', 'authorization': null},
            signal
        })
        .then(data => data.json())
        .then(async json => {
            let {courselist: standardData, result} = json
            if(result === 'failed') {
                alertMessage('안내', '코스 정보를 불러오는데 실패했습니다.')
            } else if(result === 'success') {
                standardData = manufactureCourseData(standardData)
                if(route.params !== undefined) {
                    const { range } = route.params
                    /** 내 위치 가져오기 **/
                    let location = await Location.getCurrentPositionAsync({}) // 기본 위치정보 연결
                    const { longitude: userLongitude, latitude: userLatitude } = location.coords // 위도, 경도분할

                    standardData = standardData.filter(data => {
                        const LatLng = data.position
                        const [ latitude, longitude ] = LatLng
                        
                        const { result } = checkValidLocation(
                            {
                                latitude: userLatitude, 
                                longitude: userLongitude}
                            ,{
                                latitude: Number(latitude),
                                longitude: Number(longitude)
                            }, 
                            range
                            )
                        if(result === 'DONE') return data
                    })
                }
                setCourseList(standardData)
            }

            abortRequest = false
            setReady('done')
            setShowLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(_=> {
        requestListData()
    }, [])

    return(
        <View style={courseListStyle.container}>
            {
                showLoading
                ?
                <Loading></Loading>
                :
                null
            }
            <View style={courseListStyle.listWrapper}>
                {
                    ready === 'done'
                    ?
                    <ScrollView
                    contentContainerStyle={courseList.length > 0 ? null : {flex: 1, justifyContent: 'center'}}
                    >
                        {
                            courseList.length > 0
                            ?
                            courseList.map((course, i) => (
                                <CourseItem
                                    data={course}
                                    key={i}
                                />
                            ))
                            :
                            <Text style={courseListStyle.defaultText}>근처에 이용가능한 코스가 존재 하지 않습니다.</Text>
                        }
                    </ScrollView>
                    :
                    null
                }
            </View>
            <Menubar></Menubar>
        </View>
    )
}

//위도 1도 사이의 거리는 48,000 ÷ 360 = 133.33 km
//경도 1도 사이의 거리는 133.33 * cos(현재 위도) km