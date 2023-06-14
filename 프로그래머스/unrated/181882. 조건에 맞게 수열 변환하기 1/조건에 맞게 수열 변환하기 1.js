function solution(arr) {
    return arr.map((v,i) => {
        return v >= 50 && !(v%2) ? v/2 : v < 50 && (v%2) ? v*2 : v
    })
}