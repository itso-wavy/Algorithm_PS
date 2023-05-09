function solution(numbers) {
    let num = 0
    for(let i = 0; i < 10; i++) {
        if(numbers.indexOf(i) < 0) num += i
    }
    return num;
}