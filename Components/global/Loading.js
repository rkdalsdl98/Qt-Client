import React from "react";
import { View, Text, ActivityIndicator, Modal } from "react-native";

export default function Loading({loadingText}) {
    return(
        <Modal transparent={true} animationType="none" visible={true}>
            <View 
            style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `rgba(0,0,0,.5)`
            }}>
                <ActivityIndicator animating={true} color='white' size="large" />
                <Text style={{ color: `white` }}>{loadingText ? loadingText : '잠시만 기다려주세요...'}</Text>
            </View>
        </Modal>
    )
}