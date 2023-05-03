function solution(n){
    return String(n).split('').reduce((a,c) => a+Number(c) ,0)
}