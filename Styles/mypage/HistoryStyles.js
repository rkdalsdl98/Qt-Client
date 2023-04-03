import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#f1f3f5',
        alignItems: 'center'
    },
    historyWrapper: {
        width: normalizeSize(210),
        height: '100%',
        justifyContent: 'space-evenly',
    }
})