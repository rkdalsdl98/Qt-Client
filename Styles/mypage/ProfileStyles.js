import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#f1f3f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileWrapper: {
        flexDirection: 'row',
        width: '60%',
        height: '80%',
        padding: normalizeSize(5),
        paddingLeft: 0
    },
    imageStyle: {
        width: normalizeSize(60),
        height: normalizeSize(60),
        borderRadius: normalizeSize(30),
    },
    userWrapper: {
        width: '70%',
        height: '100%',
        padding: normalizeSize(10),
    },
    userName: {
        fontSize: normalizeSize(15),
        fontWeight: 'bold'
    },
    point: {
        fontSize: normalizeSize(10),
    }
})