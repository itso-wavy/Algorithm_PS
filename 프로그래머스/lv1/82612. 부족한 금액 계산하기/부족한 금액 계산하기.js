function recursion(price, count) {
    return price*count + (count === 1 ? 0 : recursion(price, count-1))
}

function solution(price, money, count) {
    const rest = recursion(price, count) - money
    return rest > 0 ? rest : 0
}
