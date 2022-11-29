function solution(s1, s2) {
    let answer = 0
    s2.filter(i => !!s1.includes(i) ? answer++ : answer)
    return answer
}