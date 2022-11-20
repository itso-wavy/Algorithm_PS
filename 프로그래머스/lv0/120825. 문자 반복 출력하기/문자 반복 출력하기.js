function solution(my_string, n) {
    let answer = ''
    for(let i of my_string) answer += i.repeat(n)
    return answer
    // return [...my_string].reduce((a, c) => a + c.repeat(n), '')
    // return [...my_string].map(i => i.repeat(n)).join('')
}