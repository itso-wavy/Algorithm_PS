function solution(num, total) {
    const arr = []
    for(let i=Math.ceil(total/num) - ~~(num/2); arr.length<num; i++) arr.push(i)
    return arr
}