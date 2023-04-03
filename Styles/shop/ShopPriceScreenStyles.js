import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainImageFrame: {
        flex: 3,
    },
    mainImage: {
        width: "100%",
        height: "100%",
    },
    contentInfoFrame: {
        flex: 6,
    },
    contentInfo: {
        padding: normalizeSize(20),
        paddingTop: normalizeSize(40),
        alignItems: 'center',
    },
    bottomBar: {
        flex: 1,
        flexDirection: 'row',
    },
    priceBtn: {
        flex: 1,
    },
    priceBtnFrame: {
        flex: 1,
        alignItems: 'center',
        padding: normalizeSize(18),
        backgroundColor: '#87CEEB',
        borderWidth: normalizeSize(3),
        borderRadius: normalizeSize(30),
        borderColor: 'white'
    },
    choiceBtn: {
        flex: 1,
    },
    choiceBtnFrame: {
        flex: 1,
        alignItems: 'center',
        padding: normalizeSize(18),
        backgroundColor: '#87CEEB',
        borderWidth: normalizeSize(3),
        borderRadius: normalizeSize(30),
        borderColor: 'white'
    },
    btnTextStyle: {
        fontSize: normalizeSize(18),
        fontWeight: '700',
        color: 'white',
    },
    subImage: {
        width: normalizeSize(200),
        height: normalizeSize(200)
    },
    infoTextStyle: {
        fontSize: normalizeSize(17),
    }
})