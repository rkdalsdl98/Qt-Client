import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
    },
    tempContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        padding: normalizeSize(10),
        paddingLeft: normalizeSize(15),
        opacity: .5,
    },
    commentStyle: {
        fontSize: normalizeSize(12),
        fontWeight: '600',
    },
    tempTextStyle: {
        fontSize: normalizeSize(35),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    tempDetailTextStyle: {
        fontSize: normalizeSize(10),
        fontWeight: '500',
    },
    tempDetailContainer: {
        width: '90%',
        height: normalizeSize(120),
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
    },
    tempTextWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    commentWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cityTextWrapper: {
        flex: .5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cityTextStyle: {
        fontSize: normalizeSize(12),
        fontWeight: '900',
    },
})