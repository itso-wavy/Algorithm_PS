function solution(words, queries) {
    return queries.map(q => {
        const re = new RegExp(q.replaceAll('?', '.'))
        return words.filter(w => (q.length === w.length) && re.test(w)).length
    })
}
// 정규표현식은 효율성에서 떨어짐! 😂
