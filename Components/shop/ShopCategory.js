import React, {useState} from "react";
import { View, } from "react-native";

import ShopCategoryStyles from "../../Styles/shop/ShopCategoryStyles";

import CategoryButton from "./CategoryButton";

export default function ShopCategory({onChangeCategory}) {
    const [highlight, setHighlight] = useState('all')
    const onPressButton = category => {
        if(highlight !== category) {
            onChangeCategory(category)
            setHighlight(category)
        }
    }

    return(
        <View style={ShopCategoryStyles.container}>
            <CategoryButton
                highlight={highlight}
                info={{
                    showName: '전체',
                    eventName: 'all'
                }}
                onPressEvent={onPressButton}
            />
            <CategoryButton
                highlight={highlight}
                info={{
                    showName: '음식',
                    eventName: 'food'
                }}
                onPressEvent={onPressButton}
            />
            <CategoryButton
                highlight={highlight}
                info={{
                    showName: '스포츠',
                    eventName: 'sport'
                }}
                onPressEvent={onPressButton}
            />
            <CategoryButton
                highlight={highlight}
                info={{
                    showName: '상품권',
                    eventName: 'giftcard'
                }}
                onPressEvent={onPressButton}
            />
            <CategoryButton
                highlight={highlight}
                info={{
                    showName: '의류',
                    eventName: 'cloth'
                }}
                onPressEvent={onPressButton}
            />
        </View>
    )
}