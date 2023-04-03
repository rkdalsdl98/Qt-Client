import { View, Text } from "react-native"
let nickName = 'None'
let point = 0

export function setNickName(newNickName) {
    nickName = newNickName
}

export function setPoint(newPoint) {
    point = newPoint
}

export default {
    headerRight: _=> (
        <View style={{justifyContent: 'flex-end'}}>
            <Text style={{textAlign: 'right'}}>{nickName} 님</Text>
            <Text style={{textAlign: 'right'}}>{point} P</Text>
        </View>
    )
}