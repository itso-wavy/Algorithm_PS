function solution(array) {
    let index = 0;
    while(array[index] !== Math.max(...array)) {
        index++;
    }
    return [Math.max(...array), index]
}