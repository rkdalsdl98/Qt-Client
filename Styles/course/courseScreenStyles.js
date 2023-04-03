import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
    }, 
    controlPanelWarpper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    courseProgressWrapper: {
        flex: 1,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    QRBtnWrapper: {
        flex: 1,
    },
    QRBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: normalizeSize(15),
    },
    distanceWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: normalizeSize(15),
    },
    textStyle: {
        fontSize: normalizeSize(10),
        textAlign: 'center'
    },
    buttonStyle: {
        flex: 1,
    },
    buttonTextStyle: {
        fontSize: normalizeSize(13),
        fontWeight: '600',
        textAlign: 'center'
    }
})