import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    infoWrapper: {
        flex: 4,
    },
    funcBtnContainer: {
        flex: 2,
        borderTopWidth: 2,
        borderColor: '#f1f3f5',
    },
    funcBtnStyle: {
        padding: normalizeSize(20),
        paddingBottom: normalizeSize(5),
        paddingTop: normalizeSize(10),
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfoContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    infoOrderWrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    userInfoWrapper: {
        flex: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    repairBtnWrapper: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    repairBtnStyle: {
        borderRadius: 10,
        borderWidth: 5,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderColor: '#f1f3f5',
        backgroundColor: '#f1f3f5',
    },
    imageStyle: {
        width: normalizeSize(64) * 2,
        height: normalizeSize(64) * 2,
        borderRadius: 120,
    }
})