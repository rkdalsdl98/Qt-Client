import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        paddingTop: normalizeSize(5),
        padding: 5,
    },
    weatherWrapper: {
        flex: 1,
        width: normalizeSize(300),
        borderRadius: 18,
        backgroundColor: '#f1f3f5',
        justifyContent: 'space-between'
    },
})