function solution(s1, s2) {
    return s1.filter(i => s2.includes(i)).length
}