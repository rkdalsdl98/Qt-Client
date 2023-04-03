import { StyleSheet } from "react-native";
import { normalizeSize } from "../../Funclibrary/GlobalFunc";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: normalizeSize(450), 
        height: normalizeSize(450), 
        aspectRatio: 1/1.5
    }
})