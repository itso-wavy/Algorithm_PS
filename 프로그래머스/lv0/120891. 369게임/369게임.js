function solution(order) {
    let counter = 0;
    Array.from(order.toString()).forEach(i => {
        if(i == 3||i == 6||i == 9)
            counter++
    })
    return counter;
}