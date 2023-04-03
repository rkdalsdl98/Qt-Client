import React from "react";
import { View, Text } from "react-native";

import ProfileSettingStyles from "../../Styles/mypage/ProfileSettingStyles";

export default function MyDatas({userDatas}) {
    const [id, nickName, phoneNumber, email] = userDatas
    return(
        <View style={ProfileSettingStyles.userInfoWrapper}>
            <Text>{id === undefined ? 'empty' : id}</Text>
            <Text>{nickName === undefined ? 'empty' : nickName}</Text>
            <Text>{phoneNumber === undefined ? 'empty' : phoneNumber}</Text>
            <Text>{email === undefined ? 'empty' : email}</Text>
        </View>
    )
}