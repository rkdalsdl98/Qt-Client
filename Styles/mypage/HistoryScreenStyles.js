import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    userContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: normalizeSize(40)     
    },
    infoBtnContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logsContainer: {
        flex: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: normalizeSize(55)
    },
    userInfoText: {
        fontSize: normalizeSize(18)
    },
    pointLarge: {
        fontSize: normalizeSize(20),
        fontWeight: '800'
    },
    defaultText: {
        fontSize: normalizeSize(13),
        textAlign: 'center',
    },
    infoBtn: {
        width: normalizeSize(230),
        height: normalizeSize(35),
        justifyContent: 'center',
        backgroundColor: '#E2E2E2'
    }
})