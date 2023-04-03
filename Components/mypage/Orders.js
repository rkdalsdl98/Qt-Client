import React from "react";
import { View, Text } from "react-native";

import ProfileSettingStyles from "../../Styles/mypage/ProfileSettingStyles";

export default function Orders() {
    return(
        <View style={ProfileSettingStyles.infoOrderWrapper}>
            <Text style={{color: '#BDBDBD'}}>아이디</Text>
            <Text style={{color: '#BDBDBD'}}>닉네임</Text>
            <Text style={{color: '#BDBDBD'}}>휴대폰번호</Text>
            <Text style={{color: '#BDBDBD'}}>이메일</Text>
        </View>
    )
}