function solution(my_string, num1, num2) {
    // 1)
    // const new_string = [...my_string]
    // new_string[num2] = my_string[num1]
    // new_string[num1] = my_string[num2]
    // return new_string.join('');
    
    // 2)
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}