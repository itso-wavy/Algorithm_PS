function solution(n) {
    let i;
    for(i = 1; i <= n; i++) {
        if (~~(n / i) > 0) n = (n / i)
        else break;
    }
    return i - 1
}