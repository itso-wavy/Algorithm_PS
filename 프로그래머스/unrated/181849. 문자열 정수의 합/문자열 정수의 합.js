function solution(num_str) {
    return num_str.split('').reduce((a,c) => a+Number(c), 0)
}