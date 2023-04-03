import React from "react";
import { StyleSheet, Modal } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";


export default function QRScanner({scanCallback, aliveScanner}) {
    return (
        <Modal
        visible={true}
        animationType='none'
        transparent={false}
        >
            <BarCodeScanner
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={aliveScanner ? undefined : scanCallback}
            />
        </Modal>
    )
}