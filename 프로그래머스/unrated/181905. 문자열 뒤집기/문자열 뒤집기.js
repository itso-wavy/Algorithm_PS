function solution(my_string, s, e) {
    const arr = [...my_string]
    arr.splice(s, e-s+1, ...[...my_string.slice(s, e+1)].reverse())
    return arr.join('')
}