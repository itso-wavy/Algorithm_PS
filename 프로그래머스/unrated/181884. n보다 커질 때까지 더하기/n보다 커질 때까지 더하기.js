function solution(numbers, n) {
    let num = 0;
    for(let i = 0; i < numbers.length; i++) {
        num = num + numbers[i]
        if(num > n) break
    }
    return num
}