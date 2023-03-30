function solution(str) {
    const arr = []
    for(let s of str) {
        if(str.indexOf(s) === str.lastIndexOf(s)) arr.push(s)
    }
    return arr.sort().join('')
}