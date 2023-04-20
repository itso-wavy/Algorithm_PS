function solution(emergency) {
    const sorted_arr = [...emergency].sort((a, b) => b - a)
    return emergency.map(v => sorted_arr.indexOf(v) + 1)
}