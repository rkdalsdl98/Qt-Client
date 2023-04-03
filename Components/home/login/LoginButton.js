import React from "react";
import { View } from "react-native";

import { normalizeSize } from "../../../Funclibrary/GlobalFunc";

import MenualButton from "../../MenualButton";

import LoginButtonStyles from "../../../Styles/home/login/loginButtonStyles";

export default function LoginButton({pressEvent}) {
    return(
        <View style={LoginButtonStyles.container}>
            <MenualButton
            innerText='로그인'
            customStyle={customButtonStyle}
            onPressEvent={pressEvent ? pressEvent : null}
            />
        </View>
    )
}

const customButtonStyle = {
    container: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: normalizeSize(10)
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e6f4fa',
        borderRadius: normalizeSize(18),
        borderLeftWidth: normalizeSize(20),
        borderRightWidth: normalizeSize(20),
        borderColor: '#e6f4fa',
        alignItems: 'center',
        justifyContent: 'center',
        width: normalizeSize(100),
    },
    textStyle: {
        fontSize: normalizeSize(15),
        fontWeight: '300',
    },
    activeOpacity: .3,
}