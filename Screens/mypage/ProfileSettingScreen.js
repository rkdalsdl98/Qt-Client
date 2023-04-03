import React, {useEffect} from "react";
import { View } from "react-native";

import ProfileSetting from "../../Components/mypage/ProfileSetting";
import MyPageHeaderStyles from "../../Styles/mypage/MyPageHeaderStyles";
import ProfileSettingStyles from "../../Styles/mypage/ProfileSettingStyles";

const ProfileHeaderStyles = {...MyPageHeaderStyles}

export default function ProfileSettingScreen({navigation, route}) {
    const profileData = route.params
    
    useEffect(_=> {
        ProfileHeaderStyles.title = '프로필 설정'
        navigation.setOptions(ProfileHeaderStyles)
    }, [])

    return(
        <View style={ProfileSettingStyles.screen}>
            <ProfileSetting
            profileData={profileData}
            />
        </View>
    )
}