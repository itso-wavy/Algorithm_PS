function solution(order) {
    return [...order.toString().matchAll(/[369]/g)].length
}
