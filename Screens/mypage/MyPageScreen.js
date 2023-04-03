import React, {useEffect, useState} from "react";
import { View, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { getJsonData } from "../../Funclibrary/Storage";
import { alertMessage, normalizeSize } from "../../Funclibrary/GlobalFunc";
import Loading from "../../Components/global/Loading";

import MyPageHeaderStyles from "../../Styles/mypage/MyPageHeaderStyles";
import MyPageScreenStyles from "../../Styles/mypage/MyPageScreenStyles";
import Menubar from "../../Components/home/Menubar";
import MyPage from "../../Components/mypage/MyPage";

export default function MyPageScreen({navigation}) {
    const [simpleProfile, setSimpleProfile] = useState(null)
    const [isLoadedData, setloadedData] = useState(null)
    const loadData = async _=> {
        const loadResult = await getJsonData('profile')
        const { value, result } = loadResult
        if(result === 'done') {
            const {nickname, point} = value
            MyPageHeaderStyles.headerRight = _=> (
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={_=> navigation.navigate('profile', value)}
                >
                    <Fontisto name="player-settings" size={normalizeSize(20)} color="grey" />
                </TouchableOpacity>
            )
            setSimpleProfile({nickname: nickname, point: point})
        } else if(result === 'failed') {
            const { message } = loadResult
            alertMessage('안내', message)
        }

        setloadedData('done')
        navigation.setOptions(MyPageHeaderStyles)
    }
    
    useEffect(_=> {
        loadData()
    }, [])
    return(
        <View style={MyPageScreenStyles.container}>
            {
                isLoadedData === 'done'
                ?
                <View style={{flex: 1}}>
                    <MyPage
                    profileData={simpleProfile}
                    />
                    <Menubar/>
                </View>
                :
                <Loading
                loadingText=' '
                />
            }
        </View>
    )
}