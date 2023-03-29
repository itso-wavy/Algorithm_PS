function solution(array) {
    return array.join('').replace(/[^7]/g,'').length
}