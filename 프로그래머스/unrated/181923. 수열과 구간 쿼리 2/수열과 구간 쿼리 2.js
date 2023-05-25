function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const re = arr.slice(s,e+1).sort((a,b) => a-b).find(i => i>k)
        return re ? re : -1
    })
}