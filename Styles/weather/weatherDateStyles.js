import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: normalizeSize(15),
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateWrapper: {
        flex: 3,
    },
    dateTextStyle: {
        fontSize: normalizeSize(10),
        fontWeight: '400',
        paddingLeft: normalizeSize(15)
    },
    refreshWrapper: {
        flex: 1,
    },
    refreshBtnStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    refreshIconStyle: {
        width: normalizeSize(20),
        height: normalizeSize(20),
    }
})