import React from "react";
import { View, Text, } from "react-native";

import ShopContainerHeaderStyles from "../../Styles/shop/ShopContainerHeaderStyles";

import ShopCategory from "./ShopCategory";

export default function ShopHeader({onChangeCategory}) {
    return(
        <View style={ShopContainerHeaderStyles.container}>
            <View style={ShopContainerHeaderStyles.headerWrapper}>
                <Text style={ShopContainerHeaderStyles.headerTextStyle}>구매가능 상품</Text>
            </View>
            <ShopCategory
            onChangeCategory={onChangeCategory}
            />
        </View>
    )
}