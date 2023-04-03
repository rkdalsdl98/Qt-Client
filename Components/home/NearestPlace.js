import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import nearestPlaceStyles from "../../Styles/home/nearestPlaceStyles";

export default function NearestPlace() {
    const navigation = useNavigation()
    return(
        <View style={nearestPlaceStyles.container}>
            <View style={nearestPlaceStyles.wrapper}>
                <TouchableOpacity 
                    style={nearestPlaceStyles.backgruondStyle}
                    activeOpacity={.8}
                    onPress={_=> navigation.navigate('courselist', {range: 0.005})}
                >
                    <Text style={nearestPlaceStyles.textStyle}>가까운 코스 확인하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}