function solution(num) {
    let count = 0;
    while(num !== 1) {
        ++count
        num%2 === 0 ? num /= 2 : num = num*3 +1
    }
    return count < 500 ? count : -1
}