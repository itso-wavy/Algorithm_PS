function solution(i, j, k) {
    return Array.from({length: j - i + 1}, (v, index) => index + i).join('').split(k).length - 1
}
