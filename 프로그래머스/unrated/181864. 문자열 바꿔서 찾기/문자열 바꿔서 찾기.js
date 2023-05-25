function solution(myString, pat) {
    pat = [...pat].map(v => v === 'A' ? 'B' : 'A').join('')
    return new RegExp(pat).test(myString)*1
}