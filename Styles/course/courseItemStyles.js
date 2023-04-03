import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    courseItemFrame: {
        flex: 1,
        padding: normalizeSize(20),
    },
    courseItemWrapper: {
        height: normalizeSize(80),
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    imageWrapper: {
        flex: 1.5,
    },
    textWrapper: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: normalizeSize(10),
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
})