function solution(myString) {
    return [...myString].map(v => v === 'a'|| v === 'A' ? 'A' : v.toLowerCase()).join('')
}