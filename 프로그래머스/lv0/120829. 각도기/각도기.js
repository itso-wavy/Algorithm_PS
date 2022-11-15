// 풀이1
function solution(angle) {
    if(angle < 90) {
        return 1
    } else if(angle == 90) {
        return 2
    } else if(angle < 180) {
        return 3
    } else return 4
}

// 풀이2
function solution(angle) {
    return [90, 91, 180, 181].findIndex(i => i > angle) + 1
}
