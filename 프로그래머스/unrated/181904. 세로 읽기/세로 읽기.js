function solution(my_string, m, c) {
    return [...my_string].reduce((a,b,i) => i%m===(c-1) ? a+b : a, '')
}