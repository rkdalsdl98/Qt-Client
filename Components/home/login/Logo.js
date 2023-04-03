import React from "react";
import { View, Image } from "react-native";

import logoStyles from "../../../Styles/home/login/logoStyles";

export default function Logo() {
    return(
        <View style={logoStyles.container}>
            <Image
                source={require('../../../assets/exampleIcon2.png')}
                style={logoStyles.logoStyle}
                />
        </View>
    )
}