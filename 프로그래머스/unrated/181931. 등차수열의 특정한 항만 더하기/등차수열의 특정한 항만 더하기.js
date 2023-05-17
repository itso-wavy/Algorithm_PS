function solution(a, d, included) {
    // 3 7 11 15 ...
    const arr = []
    let i = a
    for(let j = 0; j < included.length; j++) {
        if (included[j]) arr.push(i)
        i += d
    }
    return arr.reduce((a,c) => a+c, 0);
}