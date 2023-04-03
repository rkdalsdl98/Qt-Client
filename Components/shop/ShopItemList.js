import React from "react";
import { View, ScrollView } from "react-native";

import ShopListStyles from "../../Styles/shop/ShopListStyles";
import Loading from "../global/Loading";

import ShopItem from "./ShopItem";

export default function ShopItemList({listDatas}) {
    return(
        <View style={ShopListStyles.container}>
            <ScrollView
            >
                {
                    listDatas 
                    ?
                    listDatas.map((item, key) =>( 
                        <ShopItem
                        data={item}
                        key={key}
                        />
                    ))
                    :
                    <Loading/>
                }
            </ScrollView>
        </View>
    )
}