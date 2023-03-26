function solution(box, n) {
    return box.reduce((a,v) => ~~(v / n) * a, 1)
}