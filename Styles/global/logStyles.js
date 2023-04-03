import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    nameWrapper: {
        width: normalizeSize(150),
        height: normalizeSize(30),
        flexDirection: 'row',
    },
    dataWrapper: {
        width: normalizeSize(70),
        alignItems: 'center'
    },
    rewardText: {
        fontSize: normalizeSize(12),
        fontWeight: '800'
    },
    defaultText: {
        fontSize: normalizeSize(12)
    }
})