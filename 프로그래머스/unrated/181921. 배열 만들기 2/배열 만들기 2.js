function solution(l, r) {
    const arr = []
    for(let i = l; i <= r; i++) {
        if(!/[1-46-9]/.test(i+'')) arr.push(i)
    }
    return arr.length ? arr : [-1];
}