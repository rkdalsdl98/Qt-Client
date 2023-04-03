import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1.5,
        padding: 5
    },
    wrapper: {
        flex: 1,
        width: normalizeSize(300)
    },
    backgruondStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1f3f5',
        borderRadius: 18
    },
    textStyle: {
        fontSize: normalizeSize(18),
        fontWeight: '800',
        color: 'black',
        padding: normalizeSize(20)
    }
})