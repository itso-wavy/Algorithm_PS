function solution(num_list, n) {
    return num_list.filter(v => v === n).length ? 1 : 0
}