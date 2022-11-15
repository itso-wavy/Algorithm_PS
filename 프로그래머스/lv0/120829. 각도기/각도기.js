function solution(angle) {
    return [90, 91, 180, 181].findIndex(i => i > angle) + 1
}