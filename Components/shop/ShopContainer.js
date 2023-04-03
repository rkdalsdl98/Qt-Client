import React, { useState, useEffect } from "react";
import { View } from "react-native";

import ShopContainerStyles from "../../Styles/shop/ShopContainerStyles";

import ShopItemList from "./ShopItemList";
import ShopContainerHeader from "./ShopContainerHeader";

export default function ShopContainer({itemList}) {
    const [listData, setListData] = useState(null)
    const [category, setCategory] = useState('all')
    
    const onChangeCategory = (newCategory) => {
        if(newCategory !== category) {
            if(newCategory === 'all') {
                setListData(itemList)
                setCategory(newCategory)
            } else {
                const newList = itemList.filter(item => item.카테고리 === newCategory)
                setListData(newList)
                setCategory(newCategory)
            }
        }
    }

    useEffect(_=> {
        setListData(itemList)
    }, [])

    return(
        <View style={ShopContainerStyles.container}>
            <ShopContainerHeader
            onChangeCategory={onChangeCategory}
            />
            <ShopItemList
            listDatas={listData}
            />
        </View>
    )
}