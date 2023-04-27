function solution(n, m) {
    const factorial = (i) => {
        let j = 1
        for(let k=2; k<=i; k++) {
            j = j * k;
        }
        return j
    }
    return Math.round(factorial(n)/((factorial(n-m))*factorial(m)))
}