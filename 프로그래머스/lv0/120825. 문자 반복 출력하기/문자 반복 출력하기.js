function solution(my_string, n) {
    const arr = []
    my_string.split('').forEach(i => {
        for(j = 0; j < n; j++) arr.push(i)
    })
    return arr.join('')
}