function solution(n, i = 1) {
    while(n % i !== 1){
        i++;
    }
    return i
}