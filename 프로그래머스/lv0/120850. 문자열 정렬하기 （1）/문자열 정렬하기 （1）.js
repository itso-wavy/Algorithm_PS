function solution(my_string) {
    const arr = [...my_string].filter(i => /[0-9]/g.test(i))
    return arr.map(i => Number(i)).sort((a, b) => a -b)

}