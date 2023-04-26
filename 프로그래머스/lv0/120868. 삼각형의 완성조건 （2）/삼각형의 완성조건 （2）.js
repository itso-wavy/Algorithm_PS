function solution(sides) {
    const i = Math.min(...sides)
    const j = sides[0]+sides[1] - Math.max(...sides) - 1
    return i + j
}