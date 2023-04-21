function solution(num_str) {
    return num_str.toString().split('').reduce((a,c) => a+Number(c), 0)
}