import { StyleSheet } from "react-native";
import { normalizeSize } from "../../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle: {
        width: normalizeSize(100),
        height: normalizeSize(100),
        borderWidth: normalizeSize(5),
        borderRadius: normalizeSize(40)
    },
})