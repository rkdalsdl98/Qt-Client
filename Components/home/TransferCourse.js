import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TransferStyles from '../../Styles/home/transferStyles'

export default function TransferCourse() {
    const navigation = useNavigation()
    const onPressListButton = _=> navigation.navigate('courselist')
    return(
        <View style={TransferStyles.container}>
            <View style={TransferStyles.transferWrapper}>
                <TouchableOpacity 
                    style={TransferStyles.backgruondStyle}
                    activeOpacity={.8}
                    onPress={onPressListButton}
                >
                    <Text style={TransferStyles.textStyle}>이용가능한 코스 확인하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}