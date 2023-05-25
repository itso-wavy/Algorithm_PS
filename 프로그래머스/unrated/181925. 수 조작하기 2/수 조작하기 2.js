function solution(numLog) {
    return numLog.map((v,i) => {
        switch(numLog[i+1] - v) {
            case 1: return 'w'
            case -1: return 's'
            case 10: return 'd'
            case -10: return 'a'
        }
    }).join('')
}