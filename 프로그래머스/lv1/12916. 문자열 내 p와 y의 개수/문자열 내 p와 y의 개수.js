function solution(s){
    const p = s.match(/p/ig) ? s.match(/p/ig).length : 0
    const y = s.match(/y/ig) ? s.match(/y/ig).length : 0
    return p === y ? true : false
}