function solution(cipher, code) {
    const arr = [];
    for(let i = 1; i <= cipher.length; i++) {
        i % code === 0 ? arr.push(cipher[i-1]) : undefined;
    }
    return arr.join('')
}