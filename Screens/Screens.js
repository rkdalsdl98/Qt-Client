import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import globalHeader from '../Styles/global/globalHeader';
import { useNavigation } from "@react-navigation/native";

import CourseInfoScreen from './course/CourseInfoScreen';
import CourseListScreen from './course/CourseListScreen'
import CourseScreen from './course/CourseScreen';
import HomeScreen from './HomeScreen'
import MyPageScreen from './mypage/MyPageScreen';
import ProfileSettingScreen from './mypage/ProfileSettingScreen';
import ProfileImageScreen from './mypage/ProfileImageScreen';
import Map from '../Components/map/Map';
import ShopScreen from './shop/ShopScreen';
import ShopPriceScreen from './shop/ShopPriceScreen';
import HistoryScreen from './mypage/HistoryScreen';

const Stack = createNativeStackNavigator()

export default function Screens() {
    const navigation = useNavigation()
    return(
        <Stack.Navigator>
            <Stack.Group screenOptions={globalHeader}>
                {/** 홈 스크린 **/}
                <Stack.Screen 
                    name='home' 
                    component={HomeScreen}
                />
                {/** 마이페이지 스크린 **/}
                <Stack.Screen
                    name='mypage'
                    component={MyPageScreen}
                    options={{
                        headerLeft: _=> (<View></View>),
                    }}
                />
                <Stack.Screen
                    name='profile'
                    component={ProfileSettingScreen}
                />
                <Stack.Screen
                    name='profileimage'
                    component={ProfileImageScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='history'
                    component={HistoryScreen}
                    options={{
                        headerRight: _=> (<View></View>)
                    }}
                />
                {/** 코스 스크린 **/}
                <Stack.Screen
                    name='course'
                    component={CourseScreen}
                    options={
                        {
                            headerLeft: _=> (<View></View>), // 뒤로가기 버튼 가리는 꼼수
                        }
                    }
                />
                <Stack.Screen 
                    name='courselist' 
                    component={CourseListScreen}
                    options={
                        {
                            headerLeft: _=> (<View></View>), // 뒤로가기 버튼 가리는 꼼수
                        }
                    }
                />
                <Stack.Screen
                    name='courseinfo'
                    component={CourseInfoScreen}
                />
                {/** 맵 스크린 **/}
                <Stack.Screen
                    name='map'
                    component={Map}
                />
                {/** 상점 스크린 **/}
                <Stack.Screen
                    name='shop'
                    component={ShopScreen}
                    options={{
                        headerLeft: _=> (<View></View>)
                    }}
                />
                <Stack.Screen
                    name='shop_price'
                    component={ShopPriceScreen}
                    options={{
                        headerRight: _=> (<View></View>)
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

// 스크린 옵션부분은 해당 스크린 js 내부에서 setOptions() 함수로 변경 하도록
// 처리하게 바꿔야함.