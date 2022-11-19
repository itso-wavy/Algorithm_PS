function solution(num_list) {
    const arr = [0, 0]
    num_list.forEach(i => {
        arr[i % 2]++
    })
    // const even = num_list.filter(i => i % 2 === 0).length 
    // return [even, num_list.length - even];
    return arr
}