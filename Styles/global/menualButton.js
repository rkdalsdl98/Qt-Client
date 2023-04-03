import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: .2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: normalizeSize(10)
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e6f4fa',
        borderRadius: normalizeSize(18),
        borderLeftWidth: normalizeSize(20),
        borderRightWidth: normalizeSize(20),
        borderColor: '#e6f4fa',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
    },
    textStyle: {
        fontSize: normalizeSize(14),
        fontWeight: '500',
    }
})