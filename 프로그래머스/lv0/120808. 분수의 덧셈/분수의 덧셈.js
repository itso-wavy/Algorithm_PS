function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    for(i = num; i >= 2; i--) {
        if (denum % i === 0 && num % i === 0) {
        denum = denum / i;
        num = num / i
        }
    }
    var answer = [denum, num];
    return answer;
}

