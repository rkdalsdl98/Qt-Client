import React, {useEffect, useState} from "react";
import { View } from "react-native";

import ShopScreenStyles from "../../Styles/shop/ShopScreenStyles";
import MyPageHeaderStyles from "../../Styles/mypage/MyPageHeaderStyles";

import Banner from "../../Components/shop/Banner";
import ShopContainer from "../../Components/shop/ShopContainer";
import Menubar from "../../Components/home/Menubar";
import Loading from "../../Components/global/Loading";
import { alertMessage } from "../../Funclibrary/GlobalFunc";

const ShopHeaderStyles = {...MyPageHeaderStyles}
ShopHeaderStyles.title = '스토어'

export default function ShopScreen({navigation}) {
    const [showLoading, setShowLoading] = useState(true)
    const [itemList, setItemList] = useState([])
    
    const requestItemList = async _=> {
        setShowLoading(true)
        const controller = new AbortController()
        const { signal } = controller
        let timeOver = true

        setTimeout(_=> {
            if(timeOver) {
                controller.abort()
                alertMessage('안내', '상점 목록을 불러오는데 실패했습니다.')
                setShowLoading(false)
            }
        }, 5000)

        await fetch('http://localhost:3000/shop', {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-type': 'application/json', 'authorization': null},
                signal
            }
        )
        .then(data => data.json())
        .then(json => {
            const { result, shopItems } = json
            if(result === 'success') {
                setItemList(shopItems)
            } else if(result === 'failed') {
                alertMessage('안내', '상점 목록을 불러오는데 실패했습니다.\n운영진에게 문의 해주세요.')
            } else if(result === 'empty') {
                alertMessage('안내', '상점 목록을 불러오는데 실패했습니다.')
            }
            timeOver = false
            setShowLoading(false)
        })
    }

    useEffect(_=> {
        (async function () {
            navigation.setOptions(ShopHeaderStyles)
            await requestItemList()
        })()
    }, [])
    
    return(
        <View style={ShopScreenStyles.container}>
            {
                showLoading
                ?
                <Loading></Loading>
                :
                <View style={{flex: 1}}>
                    <Banner></Banner>
                    <ShopContainer
                    itemList={itemList}
                    />
                    <Menubar customStyles={ShopMenubarStyles}/>
                </View>
            }
        </View>
    )
}

const ShopMenubarStyles = {
    container: {
        flex: .25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
    }
}