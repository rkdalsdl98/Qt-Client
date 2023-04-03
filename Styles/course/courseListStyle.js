import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    listWrapper: {
        flex: 1,
    },
    defaultText: {
        fontSize: normalizeSize(15),
        fontWeight: '800',
        textAlign: 'center'
    }
})