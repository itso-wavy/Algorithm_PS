function solution(my_string) {
    return my_string.split('')
        .filter(i => i > 0 ? i : 0)
        .reduce((a, c) => a + ~~c, 0)
}