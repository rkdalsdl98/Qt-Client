import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileIcon({imageSource, enablePressEvent, iconStyles}) {
    const navigation = useNavigation()
    const viewImage = imageSource ? imageSource : "https://firebasestorage.googleapis.com/v0/b/yami-533cf.appspot.com/o/img%2FuserIconx64.png?alt=media&token=0a39c024-4de1-48db-b54e-c33d1d379ec0"
    const pressIconEvent = _=> {
        if(enablePressEvent) navigation.navigate('profileimage', {imageSource: viewImage})
    }
    return(
        <TouchableOpacity
        activeOpacity={1}
        onPress={pressIconEvent}
        style={iconStyles.imageWrapper}
        >
            <Image style={iconStyles.imageStyle} source={{uri: viewImage}}></Image>
        </TouchableOpacity>
    )
}