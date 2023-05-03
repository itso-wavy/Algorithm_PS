function solution(order) {
    // 1)
    let counter = 0;
    [...order.toString()].forEach(i => {
        if(i == 3||i == 6||i == 9)
            counter++
    })
    return counter;
    // 2)
    // return ('' + order).split(/[369]/).length - 1
}
