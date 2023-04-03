import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import menualButton from '../Styles/global/menualButton'

/**
 * 매개변수 값을 전달하지 않을 경우 기본값으로 대체.
 * 
 * 단, 버튼 터치시 콜백함수는 기본값이 존재하지 않음.
 * @param {string} innerText 버튼에 들어갈 텍스트
 * @param {Object} customStyle 버튼 스타일 커스텀 없을시 기본값
 * @param {Event} onPressEvent 버튼 터치시 콜백 함수
 * @param {Booelan} showBracket 화살표 표시 기본값 null
 */
export default function MenualButton({innerText, customStyle, onPressEvent, showBracket}) {
    return(
        <View style={customStyle ? customStyle.container : menualButton.container}>
            <TouchableOpacity
                activeOpacity={customStyle.activeOpacity ? customStyle.activeOpacity : .2}
                style={
                    customStyle ? customStyle.buttonStyle : menualButton.buttonStyle
                } 
                onPress={onPressEvent ? onPressEvent : null}
            >
                <Text style={customStyle ? customStyle.textStyle : menualButton.textStyle}>{innerText ? innerText : '이동하기'}</Text>
                {
                    showBracket === true ? <Text>{'>'}</Text> : null
                }
            </TouchableOpacity>
        </View>
    )
}