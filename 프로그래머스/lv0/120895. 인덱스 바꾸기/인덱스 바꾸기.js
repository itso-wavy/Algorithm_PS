function solution(my_string, num1, num2) {
    const new_string = [...my_string]
    new_string[num2] = my_string[num1]
    new_string[num1] = my_string[num2]
    return new_string.join('');
}