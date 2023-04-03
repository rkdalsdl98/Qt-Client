import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { alertMessage } from "../../Funclibrary/GlobalFunc";

import ShopPriceScreenStyles from "../../Styles/shop/ShopPriceScreenStyles";

export default function ShopPriceBtn({price}) {
    const onPressEvent = _=> {
        alertMessage(
            '구매', 
            '선택 하신 상품을 구매 하시겠습니까?',
            [{text: '예', onPress: _=> price()},{text: '아니오', onPress: _=> null, style: 'cancel'}],
            {}
        )
    }

    return (
        <View style={ShopPriceScreenStyles.priceBtnFrame}>
            <TouchableOpacity
            style={ShopPriceScreenStyles.priceBtn}
            onPress={onPressEvent}
            >
                <Text style={ShopPriceScreenStyles.btnTextStyle}>구매하기</Text>
            </TouchableOpacity>
        </View>
    )
}