function solution(arr) {
    if(arr.length === 1) return [-1]
    else return arr.filter(i => i !== Math.min(...arr))
}