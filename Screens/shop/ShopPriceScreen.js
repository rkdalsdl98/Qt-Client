import React, { useEffect } from "react";
import { View, Image, ScrollView, Text } from "react-native";

import ShopPriceBtn from "../../Components/shop/ShopPriceBtn";
import ShopChoiceBtn from "../../Components/shop/ShopChoiceBtn";

import MyPageHeaderStyles from "../../Styles/mypage/MyPageHeaderStyles";
import ShopPriceScreenStyles from "../../Styles/shop/ShopPriceScreenStyles";
import { getJsonData, saveJsonData } from "../../Funclibrary/Storage";
import { alertMessage } from "../../Funclibrary/GlobalFunc";

export default function ShopPriceScreen({navigation, route}) {
    const { 가격, 상품상세, 이미지, 상품이름 } = route.params
    const PricePageHeaderStyles = {...MyPageHeaderStyles}
    PricePageHeaderStyles.title = 상품이름
    PricePageHeaderStyles.headerRight = _=> (<View></View>)

    const price = async _=> {
        let { result, value } = await getJsonData('profile')
        if(result === 'done') {
            const { point } = value
            const subtract = point - 가격

            if(subtract > 0) {
                const controller = new AbortController()
                const { signal } = controller
                let timeOver = true

                setTimeout(_=> {
                    if(timeOver) {
                        controller.abort()
                        alertMessage('안내', '요청시간을 초과했습니다.')
                    }
                }, 5000)

                value.point = subtract

                await fetch('http://localhost:3000/user/update', {
                method: 'PATCH',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                body: JSON.stringify({
                    data: value,
                    id: value.userId
                }),
                signal
                })
                .then(data => data.json())
                .then(async json => {
                    timeOver = false
                    const { result } = json
                    if(result === 'success') {
                        const saveResult = await saveJsonData('profile', value)

                        if(saveResult.result === 'done') alertMessage('안내', '구매에 성공했습니다!\n쿠폰함을 확인해주세요')
                        else alertMessage('안내', saveResult.message)
                    } else {
                        const { message } = json
                        alertMessage('안내', message)
                    }
                })
                .catch(e => {
                    alertMessage('안내', '예기치 못한 오류가 발생했습니다\n몇번의 재시도에도 이 문구가 계속 나온다면 개발팀에 문의 해주세요')
                })

            } else alertMessage('안내', '소지하고 계신 포인트가 부족합니다.')
        }
    }

    useEffect(_=> {
        navigation.setOptions(PricePageHeaderStyles)
    }, [])
    return (
        <View style={ShopPriceScreenStyles.container}>
            <View style={ShopPriceScreenStyles.mainImageFrame}>
                <Image 
                style={ShopPriceScreenStyles.mainImage}
                source={{
                    uri: 이미지
                }}
                />
            </View>
            <View style={ShopPriceScreenStyles.contentInfoFrame}>
                <ScrollView 
                contentContainerStyle={ShopPriceScreenStyles.contentInfo}
                >
                    <Text style={ShopPriceScreenStyles.infoTextStyle}>
                        상품설명이 들어갈 곳 입니다.
                    </Text>
                    <View style={ShopPriceScreenStyles.subImage}>
                        <Image 
                        style={ShopPriceScreenStyles.mainImage}
                        source={{
                            uri: 이미지
                        }}
                        />
                    </View>
                    <Text style={ShopPriceScreenStyles.infoTextStyle}>
                        성분표, 상품상세정보, 배송, 업체 등등의
                        설명이 들어갈 곳 입니다.
                    </Text>
                </ScrollView>
            </View>
            <View style={ShopPriceScreenStyles.bottomBar}>
                <ShopPriceBtn
                price={price}
                />
                <ShopChoiceBtn/>
            </View>
        </View>
    )
}