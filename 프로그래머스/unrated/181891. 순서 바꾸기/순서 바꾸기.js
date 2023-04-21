function solution(num_list, n) {
    const num_list2 = num_list.splice(n)
    return [...num_list2, ...num_list]
}