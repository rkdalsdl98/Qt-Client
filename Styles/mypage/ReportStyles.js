import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 2.5,
        alignItems: 'center'
    },
    reportWrapper: {
        width: normalizeSize(210),
        height: '100%',
        paddingTop: normalizeSize(20),
    }
})