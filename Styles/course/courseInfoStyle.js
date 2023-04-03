import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textWrapper: {
        flex: .25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: normalizeSize(12),
    },
    infoWrapper: {
        flex: .15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mapStyle: {
        width: '90%',
        height: '100%',
    },
    startButtonStyle: {
        flex: .2,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .7,
        backgroundColor: '#f1f3f5'
    },
    startTextStyle: {
        fontSize: normalizeSize(12),
        fontWeight: '800'
    },
    placeWrapper: {
        flex: .25,
        justifyContent: 'space-around',
        paddingLeft: normalizeSize(20)
    },
    placeHeaderStyle: {
        fontSize: normalizeSize(20),
        fontWeight: 'bold'
    },
    placeTextStyle: {
        fontSize: normalizeSize(15),
        fontWeight: '400',
    }
})