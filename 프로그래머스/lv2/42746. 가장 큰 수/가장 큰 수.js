function solution(numbers) {
    const answer = numbers.sort((a,b) => (b+''+a) - (a+''+b)).join('')
    return /[^0]/.test(answer) ? answer : '0'
}

