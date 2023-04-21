function solution(num_list) {
    const arr = num_list.filter(v => v<0) 
    return arr ? num_list.indexOf(arr[0]) : -1
}