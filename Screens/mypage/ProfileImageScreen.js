import React from "react";
import { Image, View } from "react-native";
import IncreaseProfileStyles from "../../Styles/mypage/IncreaseProfileStyles";

export default function ProfileImageScreen({route}) {
    const viewImage = route.params.imageSource
    return(
        <View style={IncreaseProfileStyles.container}> 
            <Image style={IncreaseProfileStyles.imageStyle} source={{uri: viewImage}}></Image>
        </View>
    )
}