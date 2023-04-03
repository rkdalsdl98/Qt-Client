import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import courseItemStyles from "../../Styles/course/courseItemStyles";

export default function CourseItem({data}) {    
    const { address, contentProvider, detail, image } = data
    const itemData = { image, detail, contentProvider, address } 

    const navigation = useNavigation()
    const onPressEvent = _=> navigation.navigate('courseinfo', data)
    return(
        <View style={courseItemStyles.courseItemFrame}>
            <TouchableOpacity 
            style={courseItemStyles.courseItemWrapper}
            activeOpacity={.7}
            onPress={onPressEvent}
            >
                <View style={courseItemStyles.imageWrapper}>
                    <Image style={courseItemStyles.imageStyle} source={{uri: itemData.image.URI}}></Image>
                </View>
                <View style={courseItemStyles.textWrapper}>
                    <Text>{`${itemData.address.도시} ${itemData.address.구}\n${itemData.contentProvider.장소이름}\n`}</Text>
                    <Text>{`${itemData.detail.거리}km, ${itemData.detail.기대시간}분, ${itemData.detail.난이도}단계`}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}