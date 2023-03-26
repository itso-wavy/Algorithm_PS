function solution(numbers, direction) {
    if(direction === "right") {
        numbers.unshift(numbers.at(-1));
        numbers.pop();
    } else {
        numbers.push(numbers[0]);
        numbers.shift();
        }
    return numbers;
}