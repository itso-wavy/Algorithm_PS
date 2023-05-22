function solution(common) {
    return (common[0]-common[1] === common[1] - common[2]) 
    ? common.slice(-1)-common[0]+common[1]
    : common.slice(-1)/common[0]*common[1]
}