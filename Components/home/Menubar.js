import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Fontisto, FontAwesome } from "@expo/vector-icons";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

import { useNavigation } from "@react-navigation/native";
import meunbarStyles from "../../Styles/home/meunbarStyles";

/**
 * 커스텀 스타일이 없을 경우 기본값으로 대체
 * 
 * 커스텀 스타일 사용시 해당 부분을 선언해서 사용해야함
 * 
 * container, buttonWrapper
 * 이외의 스타일은 적용되지 않으며 위에 두 가지 부분을 선언하지 않을경우 크래쉬. 
 * @param {Object} customStyles
 */
export default function Menubar({customStyles}) {
    const navigation = useNavigation()
    const useMenubarStyles = customStyles !== undefined ? customStyles : meunbarStyles
    return(
        <View style={useMenubarStyles.container}>
            <TouchableOpacity style={useMenubarStyles.buttonWrapper} onPress={_=> navigation.navigate('home')}>
                <Fontisto name="home" size={normalizeSize(24)}></Fontisto>
            </TouchableOpacity>
            <TouchableOpacity style={useMenubarStyles.buttonWrapper} onPress={_=> navigation.navigate('map')}>
                <Fontisto name="discourse" size={normalizeSize(24)}></Fontisto>
            </TouchableOpacity>
            <TouchableOpacity style={useMenubarStyles.buttonWrapper} onPress={null}>
                <Fontisto name="commenting" size={normalizeSize(24)}></Fontisto>
            </TouchableOpacity>
            <TouchableOpacity style={useMenubarStyles.buttonWrapper} onPress={_=> navigation.navigate('shop')}>
                <Fontisto name="shopping-store" size={normalizeSize(24)}></Fontisto>
            </TouchableOpacity>
            <TouchableOpacity style={useMenubarStyles.buttonWrapper} onPress={_=> navigation.navigate('mypage')}>
                <FontAwesome name="user" size={normalizeSize(24)}></FontAwesome>
            </TouchableOpacity>
        </View>
    )
}