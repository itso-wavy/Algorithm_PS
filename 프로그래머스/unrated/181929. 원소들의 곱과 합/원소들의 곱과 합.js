function solution(num_list) {
    const a = num_list.reduce((a, c) => a*c , 1)
    const b = num_list.reduce((a, c) => a+c , 0)**2
    return a < b ? 1 : 0;
}