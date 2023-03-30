function solution(s) {
    const obj = {}
    for(let i = 0; i < s.length; i++) {
        obj[s[i]] = (!obj[s[i]] ? 1 : obj[s[i]] + 1)
    }
    return Object.entries(obj).filter(i => i[1] == 1).map(i => i[0]).sort().join('')
}