function solution(box, n) {
    const a = ~~(box[0] / n)
    const b = ~~(box[1] / n)
    const c = ~~(box[2] / n)
    return a*b*c
}