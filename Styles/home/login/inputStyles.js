import { StyleSheet } from "react-native";
import { normalizeSize } from "../../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: normalizeSize(285),
        height: normalizeSize(40),
        margin: normalizeSize(10),
        padding: normalizeSize(10),
        borderWidth: normalizeSize(1),
        borderRadius: normalizeSize(20),
        backgroundColor: '#F0F8FF',
        borderColor: '#F0F8FF'
    },
    forgotButton: {
        flex: 1,
        justifyContent: 'center'
    },
    defaultTextStyle: {
        fontSize: normalizeSize(12),
        fontWeight: '300'
    }
})