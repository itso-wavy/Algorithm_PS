function solution(my_string) {
    // return my_string.match(/[^aeiou]/g).join('')
    // return /[^aeiou]/g[Symbol.match](my_string).join('')
    
    return [...my_string].filter(i => /[^aeiou]/g.test(i)).join('')
}