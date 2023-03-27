function solution(my_string) {
    let arr = []
    let arr2 = []
    for(el of my_string.toLowerCase()) {
        arr.push('abcdefghijklmnopqrstuvwxyz'.indexOf(el))
        arr = arr.sort((a, b) => a - b)
    }
    arr.forEach(i => arr2.push('abcdefghijklmnopqrstuvwxyz'[i]))
    return arr2.join('');
}