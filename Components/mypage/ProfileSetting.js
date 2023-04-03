import React, {useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Dialog from 'react-native-dialog'

import Orders from "./Orders";
import MyDatas from "./MyDatas";
import ProfileIcon from "./ProfileIcon";

import ProfileSettingStyles from "../../Styles/mypage/ProfileSettingStyles";

export default function ProfileSetting({profileData}) {
    const {email, image, nickname, phone, userId} = profileData
    // 보여주기용 기능이므로 모두 재 설계필요.
    const [visible, setVisible] = useState(false)
    const [target, onChangeTarget] = useState(null)
    const [input, onChangeInput] = useState(null)
    
    const onTargetNick = _=> {
        onChangeTarget('nick')
        setVisible(true)
    }
    const onTargetPhoneNum = _=> {
        onChangeTarget('phone')
        setVisible(true)
    }
    const onTargetEmail = _=> {
        onChangeTarget('email')
        setVisible(true)
    }
    const handleCancel = () => {
        setVisible(false)
    }

    return(
        <View style={ProfileSettingStyles.container}>
            <View style={ProfileSettingStyles.infoWrapper}>
                <ProfileIcon
                iconStyles={{imageWrapper: ProfileSettingStyles.imageWrapper, imageStyle: ProfileSettingStyles.imageStyle}}
                enablePressEvent={true}
                imageSource={image}
                />
                <View style={ProfileSettingStyles.userInfoContainer}>
                    <Orders></Orders>
                    <MyDatas userDatas={[
                        userId,
                        nickname,
                        phone,
                        email
                    ]}></MyDatas>
                    <View style={ProfileSettingStyles.repairBtnWrapper}>
                        <Dialog.Container
                        visible={visible}
                        >
                            <Dialog.Title>정보 수정</Dialog.Title>
                            <Dialog.Input
                            placeholder="수정할 내용을 입력하세요."
                            onChangeText={onChangeInput}
                            />
                            <Dialog.Button label="확인"/>
                            <Dialog.Button label="취소" onPress={handleCancel}/>
                        </Dialog.Container>
                        <View></View>
                        <View></View>
                        <TouchableOpacity
                        onPress={onTargetNick}
                        activeOpacity={.6}
                        style={ProfileSettingStyles.repairBtnStyle}
                        >
                            <Text>수정</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={onTargetPhoneNum}
                        activeOpacity={.6}
                        style={ProfileSettingStyles.repairBtnStyle}
                        >
                            <Text>수정</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={onTargetEmail}
                        activeOpacity={.6}
                        style={ProfileSettingStyles.repairBtnStyle}
                        >
                            <Text>수정</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={ProfileSettingStyles.funcBtnContainer}>
                <TouchableOpacity
                style={ProfileSettingStyles.funcBtnStyle}
                >
                    <Text style={{color: '#BDBDBD'}}>비밀번호 변경</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={ProfileSettingStyles.funcBtnStyle}
                >
                    <Text style={{color: '#BDBDBD'}}>회원탈퇴</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}