import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ShopItemStyles from "../../Styles/shop/ShopItemStyles";

export default function ShopItem({data}) {
    const { 가격, 상품상세, 이미지, 상품이름 } = data
    const { contentprovider } = JSON.parse(상품상세)

    const navigation = useNavigation()

    const onPressEvent = _=> {
        navigation.navigate('shop_price', {...data})
    }

    return(
        <TouchableOpacity
            style={ShopItemStyles.container}
            activeOpacity={.6}
            onPress={_=> onPressEvent()}
        >
            <View style={ShopItemStyles.itemImageWrapper}>
                <Image
                    source={{
                        uri: 이미지
                    }}
                    style={{
                        width: '100%', height: '100%'
                    }}
                 />
            </View>
            <View style={ShopItemStyles.itemInfoWrapper}>
                <Text style={{fontSize: 11}}>{contentprovider}</Text>
                <Text>{상품이름}</Text>
                <Text style={{fontWeight: '800'}}>{가격}P</Text>
            </View>
        </TouchableOpacity>
    )
}