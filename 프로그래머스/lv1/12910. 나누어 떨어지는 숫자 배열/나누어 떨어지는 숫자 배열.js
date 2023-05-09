function solution(arr, divisor) {
    const answer = arr.filter(i => !(i % divisor)).sort((a,b) => a-b)
    return (answer.length ? answer : [-1])
}