function solution(num_list, n) {
    const arr = []
    for(let i = 0; i < num_list.length; i = i + n) {
        const arr2 = []
        for(let j = i; j < i + n; j++) {
            arr2.push(num_list[j])
        }
        arr.push(arr2)
    }
    return arr
}