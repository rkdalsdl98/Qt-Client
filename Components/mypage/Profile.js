import React from "react";
import { View,Text,Image } from "react-native";

import ProfileStyles from "../../Styles/mypage/ProfileStyles";

export default function Profile({profileData}) {
    const {nickname, point} = profileData
    return(
        <View style={ProfileStyles.container}>
            <View style={ProfileStyles.profileWrapper}>
                <Image style={ProfileStyles.imageStyle} 
                source={
                        {
                            uri: "https://firebasestorage.googleapis.com/v0/b/yami-533cf.appspot.com/o/img%2FuserIconx64.png?alt=media&token=0a39c024-4de1-48db-b54e-c33d1d379ec0",
                        }
                    }>

                </Image>
                <View style={ProfileStyles.userWrapper}>
                    <Text style={ProfileStyles.userName}>{nickname === null ? '' : nickname}</Text>
                    <Text style={ProfileStyles.point}>포인트 {point === null ? 0 : point}P</Text>
                </View>
            </View>
        </View>
    )
}