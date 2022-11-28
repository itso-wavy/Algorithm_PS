function solution(hp) {
    const high = ~~(hp / 5) 
    const middle = ~~((hp % 5) / 3)
    const low = ~~((hp % 5 % 3) / 1)
    return high + middle + low;
}