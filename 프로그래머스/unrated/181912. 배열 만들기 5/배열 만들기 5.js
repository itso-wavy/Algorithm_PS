function solution(intStrs, k, s, l) {
    return intStrs.map(v => v.substr(s, l)*1).filter(v => v>k)
}