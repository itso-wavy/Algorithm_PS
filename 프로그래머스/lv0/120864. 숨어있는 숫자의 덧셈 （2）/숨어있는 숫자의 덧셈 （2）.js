function solution(my_string) {
    return my_string.split(/[a-z]/i).reduce((a,v) => a + Math.trunc(v), 0)
}