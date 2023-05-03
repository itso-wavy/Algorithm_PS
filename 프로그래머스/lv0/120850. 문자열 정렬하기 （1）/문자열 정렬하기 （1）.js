function solution(my_string) {
    return my_string.match(/\d/g).map(i => Number(i)).sort((a, b) => a -b)
}