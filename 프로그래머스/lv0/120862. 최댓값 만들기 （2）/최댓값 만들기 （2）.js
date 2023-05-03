function solution(numbers) {
    const arr = numbers.sort((a, b) => b - a)
    return Math.max(arr[0] * arr[1], arr.at(-1) * arr.at(-2))
}