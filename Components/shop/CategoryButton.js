import React from "react";
import { TouchableOpacity, Text } from "react-native";

import ShopCategoryStyles from "../../Styles/shop/ShopCategoryStyles";

/**
 * @param {string} highlight 하이라이트 대상
 * @param {string} buttonname 버튼 이름
 * @param {Event} onPressEvent 버튼 프레스 이벤트
 */
export default function CategoryButton({highlight, info, onPressEvent}) {
    const { showName, eventName } = info
    const onPress = _=> onPressEvent(eventName)
    
    return(
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={.6}
        >
            <Text 
            style={highlight === eventName ? ShopCategoryStyles.textHighlightStyle : ShopCategoryStyles.textStyle}
            >
            {showName}
            </Text> 
        </TouchableOpacity>
    )
}