function solution(a, b) {
    return Number([''+a+b, 2*a*b].sort((a,b)=> b-a)[0])
}