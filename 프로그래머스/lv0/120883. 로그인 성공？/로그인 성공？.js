function solution(id_pw, db) {
    const map = new Map(db)
    return map.has(id_pw[0]) 
        ? map.get(id_pw[0]) === id_pw[1] 
            ? 'login'
            : 'wrong pw'
        : 'fail'
}
