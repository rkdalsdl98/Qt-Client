import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextStyle: {
        fontSize: normalizeSize(18),
        fontWeight: '800'
    },
})