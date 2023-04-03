import React, { useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { alertMessage } from "../../../Funclibrary/GlobalFunc";

import Logo from "./Logo";
import LoginButton from "./LoginButton";
import Loading from "../../global/Loading";

import inputStyles from "../../../Styles/home/login/inputStyles";
import loginMainStyles from "../../../Styles/home/login/loginMainStyles";

export default function LoginMain({loginHandler, showLoading}) {
    const [inputId, setInputId] = useState(null)
    const [inputPass, setInputPass] = useState(null)

    const onChangeId = id => setInputId(id)
    const onChangePass = pass => setInputPass(pass)
    const onPressLogin = _=> {
        if(inputId && inputPass) {
            loginHandler({inputId, inputPass})
            setInputPass(null)
        } else alertMessage('알림', '아이디와 비밀번호를 입력해주세요.')
    }
    return(
        <View style={loginMainStyles.container}>
            { showLoading ? <Loading/> : null }
            <Logo/>
            <View style={inputStyles.container}>
                <TextInput
                placeholder="아이디"
                textAlign='center'
                style={inputStyles.input}
                onChangeText={onChangeId}
                editable={!showLoading}
                />
                <TextInput
                placeholder="비밀번호"
                textAlign='center'
                style={inputStyles.input}
                secureTextEntry={true}
                onChangeText={onChangePass}
                value={inputPass}
                editable={!showLoading}
                />
                <TouchableOpacity
                editable={!showLoading}
                style={inputStyles.forgotButton}
                activeOpacity={.5}
                onPress={_=> alertMessage('알림', '어쩔 강민?')}
                >
                    <Text style={inputStyles.defaultTextStyle}>아이디 잊어버림?</Text>
                </TouchableOpacity>
                <LoginButton
                pressEvent={onPressLogin}
                />
            </View>
        </View>
    )
}