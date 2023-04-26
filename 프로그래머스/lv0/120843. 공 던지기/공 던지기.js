function solution(numbers, k) {
    const index = (k*2-1) % numbers.length - 1
    return (index < 0 ? numbers[numbers.length+index]: numbers[index])
}