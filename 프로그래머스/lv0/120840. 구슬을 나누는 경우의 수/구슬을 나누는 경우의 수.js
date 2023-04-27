function solution(n, m) {
    const factorial = n => n === 0 ? 1 : n * factorial(n - 1)
    return Math.round(factorial(n)/(factorial(n-m))/factorial(m))
}