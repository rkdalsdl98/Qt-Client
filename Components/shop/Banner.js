import React from "react";
import { View, ScrollView, Text } from "react-native";

import BannerStyles from "../../Styles/shop/BannerStyles";

import BannerItem from "./BannerItem";

export default function Banner({datas}) {
    return(
        <View style={BannerStyles.container}>
            {/* <ScrollView
            horizontal
            >
                {
                    // 아이템 나열 함수 작성
                }
            </ScrollView> */}
            <Text style={{fontSize: 20}}>배너가 들어갈 곳 입니다.</Text>
        </View>
    )
}