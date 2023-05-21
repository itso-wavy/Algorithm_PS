function solution(progresses, speeds) {
    const arr = progresses.map((v,i) => Math.ceil((100 - v)/speeds[i]))
    // [5, 10, 1, 1, 20, 1]
    const result = []
    let num = 0
    let max = arr[0]
    arr.forEach((v, i) => {
        let temp = max
        max = Math.max(temp, v)
        if(max === temp) num++
        else {
            result.push(num)
            num = 1
        }
        if(i === arr.length - 1) result.push(num)
    })
    return result
}