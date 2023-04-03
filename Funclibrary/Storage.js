import AsyncStorage from "@react-native-async-storage/async-storage";

export async function writeLog(data) {
    let result = 'done'
    try {
        const values = await AsyncStorage.getItem('logs')
        if(values === null) {
            const standardData = { 1: { ...data } }
            await AsyncStorage.setItem("logs", JSON.stringify(standardData), e => {
                if(e) {
                    result = 'failed'
                    return {result, message: '정보를 저장하는데 실패 했습니다.'}
                }
            })
        } else {
            const parseValues = JSON.parse(values)
            const id = Object.keys(parseValues).length + 1
            const newLogs = {...parseValues}

            newLogs[id] = { ...data }
            await AsyncStorage.setItem("logs", JSON.stringify(newLogs), e => {
                if(e) {
                    result = 'failed'
                    return {result, message: '정보를 저장하는데 실패 했습니다.'}
                }
            })
        }
        return {result}
    } catch(e) {
        result = 'unexpected error'
        return {result, message: '알 수 없는 이유로 저장에 실패 했습니다\n몇번의 재시도에도 이 문구가 계속 나온다면 개발팀에 문의 해주세요'}
    }
}

export async function clearLogs() {
    let result = 'done'
    try {
        await AsyncStorage.setItem("logs", '', e => {
            if(e) {
                result = 'failed'
                return {result, message: '정보를 저장하는데 실패 했습니다.'}
            }
        })
        return {result}
    } catch(e) {
        result = 'unexpected error'
        return {result, message: '알 수 없는 이유로 저장에 실패 했습니다\n몇번의 재시도에도 이 문구가 계속 나온다면 개발팀에 문의 해주세요'}
    }
}

export async function saveStringData(key, str) {
    let result = 'done'
    try {
        await AsyncStorage.setItem(key, str, e => {
            if(e) {
                result = 'failed'
                return {result, message: '정보를 저장하는데 실패 했습니다.'}
            }
        })
        return {result}
    } catch(e) {
        result = 'unexpected error'
        return {result, message: '알 수 없는 이유로 저장에 실패 했습니다\n몇번의 재시도에도 이 문구가 계속 나온다면 개발팀에 문의 해주세요'}
    }
}

export async function saveJsonData(key, json) {
    let result = 'done'
    try {
        const toString = JSON.stringify(json)
        await AsyncStorage.setItem(key, toString, e => {
            if(e) {
                result = 'failed'
                return {result, message: '정보를 저장하는데 실패 했습니다.'}
            }
        })
        return {result}
    } catch(e) {
        result = 'unexpected error'
        return {result, message: '알 수 없는 이유로 저장에 실패 했습니다\n몇번의 재시도에도 이 문구가 계속 나온다면 개발팀에 문의 해주세요'}
    }
}

export async function getStringData(key) {
    let result = 'done'
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
          return {value, result}
        } else {
            result = 'failed'
            return {value: '', result, message: '사용자 정보를 불러오는데 실패 했습니다'}
        }
    } catch(e) {
        result = 'unexpected error'
        return {value: '', result, message: '알 수 없는 이유로 사용자 정보를 불러오는데 실패 했습니다\n개발팀에 문의 해주세요'}
    }
}

export async function getJsonData(key) {
    let result = 'done'
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        if(jsonValue !== null) {
            return {value: JSON.parse(jsonValue), result}
          } else {
              result = 'not found'
              return {value: {}, result, message: '사용자 정보를 불러오는데 실패 했습니다'}
          }
    } catch(e) {
        result = 'unexpected error'
        return {value: {}, result, message: '알 수 없는 이유로 사용자 정보를 불러오는데 실패 했습니다\n개발팀에 문의 해주세요'}
    }
}