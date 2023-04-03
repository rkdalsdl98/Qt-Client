import React from "react";
import { View } from "react-native";

import MyPageMainStyles from "../../Styles/mypage/MyPageMainStyles";
import Profile from "./Profile";
import History from "./History";
import Report from "./Report";

export default function MyPage({profileData}) {
    return (
        <View style={MyPageMainStyles.container}>
            <Profile 
            profileData={profileData}
            />
            <History
            profileData={profileData}
            />
            <Report/>
        </View>
    )
}