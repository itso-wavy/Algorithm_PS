function solution(num_list) {
    const arr = num_list.slice(-2)
    num_list.push(arr[0] < arr[1] ? arr[1]-arr[0] : arr[1]*2)
    return num_list
}