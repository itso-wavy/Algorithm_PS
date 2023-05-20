function solution(s){
    if(s[0]==='(' && s.slice(-1) === ')') {
        let acc = 0
        for(let i=0; i<s.length; i++) {
            s[i] === '(' ? acc++ : acc--
            if(acc < 0) return false
        } 
        return acc === 0 ? true : false
    } return false
}