import React from "react";
import { View, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";

export default function CourseMarker({coordinate, iconSource, description}) {
    const {latitude, longitude} = coordinate

    return(
        <View>
            <Marker
            coordinate={{latitude, longitude}}
            image={iconSource ? iconSource : null}
            >
                <Callout>
                    <Text>{description ? description : 'empty'}</Text>
                </Callout>
            </Marker>
        </View>
    )
}

/* 시작 지점과 끝 지점 사이에 위도,경도 배열을 요청하는 구글 api 주소
   * `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${endLoc}&key=${YOUR_API_KEY}`
   * startLoc과 endLoc의 구성은 'startLat, startLng' 'endLat, endLng'
   * polyline.decode() 함수로 api에서 반환한 데이터에서 routes[0].overview_polyline.points
   * 부분을 디코드하고, for문으로 point를 하나씩 오브젝트로 {latitude(point[0]) longitude(point[1])}
   * 묶은 배열로 변환하고 polyline에 coordinates 변수 매개값으로 넣는다.
   */