function solution(s) {
    const arr = []
    s.split(' ').forEach(v => {
        v !== 'Z' ? arr.push(v) : arr.pop()
    })
    return arr.reduce((a,c) => a+ +c, 0)
}