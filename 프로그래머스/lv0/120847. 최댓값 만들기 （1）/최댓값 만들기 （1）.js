function solution(numbers) {
    const s = numbers.sort((a, b) => b - a)
    return s[0] * s[1]
}