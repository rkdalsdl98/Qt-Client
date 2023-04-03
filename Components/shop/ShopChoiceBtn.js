import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import ShopPriceScreenStyles from "../../Styles/shop/ShopPriceScreenStyles";

export default function ShopChoiceBtn() {
    return (
        <View style={ShopPriceScreenStyles.choiceBtnFrame}>
            <TouchableOpacity
            style={ShopPriceScreenStyles.choiceBtn}
            >
                <Text style={ShopPriceScreenStyles.btnTextStyle}>담기</Text>
            </TouchableOpacity>
        </View>
    )
}