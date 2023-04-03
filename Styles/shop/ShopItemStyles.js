import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#f1f3f5',
        height: normalizeSize(64),
    },
    itemImageWrapper: {
        flex: 1,    
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemInfoWrapper: {
        flex: 3,
        justifyContent: 'center'
    }
})