function solution(polynomial) {
    let num1=0, num2=0
    polynomial.split(' + ').forEach(i => i.slice(-1) === 'x'
                                    ? i === 'x' 
                                    ? ++num1 
                                    : num1 += parseInt(i)
                                    : num2 += ~~i)
    
    return (num1 ? (num1 === 1 ? `x` : `${num1}x`) : '') + 
    (num2 ? (num1 ? ` + ${num2}` : `${num2}`) : '')
}