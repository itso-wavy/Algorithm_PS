function solution(citations) {
    const v = citations.sort((a,b) => b-a).findIndex((v,i) => v <= i)
    return v !== -1 ? v : citations.length
}