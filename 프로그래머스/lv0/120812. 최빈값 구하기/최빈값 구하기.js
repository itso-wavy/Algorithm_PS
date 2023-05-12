function solution(array) {
    const set = new Set(array)
    const arr = []
    set.forEach((v,i) => arr.push([i, array.filter(j => j === v).length]))
    const sortArr = arr.sort((a,b) => b[1] - a[1])
    return sortArr.length === 1 ? sortArr[0][0] : (sortArr[0][1] !== sortArr[1][1] ? sortArr[0][0] : -1)
}