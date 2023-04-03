import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: normalizeSize(15),
        fontWeight: '500',
    },
    textHighlightStyle: {
        fontSize: normalizeSize(15),
        fontWeight: '500',
        textDecorationLine: 'underline',
    }
})