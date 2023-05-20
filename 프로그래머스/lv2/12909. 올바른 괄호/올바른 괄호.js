function solution(s){
    if(s.length % 2) return false
    if(s[0]==='(' && s.slice(-1) === ')') {
        let acc = 0
        for(let i=0; i<s.length; i++) {
            if(s[i] === '(') acc++ 
            else acc--
            if(acc < 0) return false
        } 
        return acc === 0 ? true : false
    } return false
}
//1) while(/\(\)/.test(s)) s = s.replace('()', '')
// return !s.length
//2) return s.match(/\(/g).length == s.match(/\)/g).length