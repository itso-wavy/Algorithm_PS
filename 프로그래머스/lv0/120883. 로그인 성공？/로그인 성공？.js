function solution(id_pw, db) {
    const index = db.map(i => i[0]).indexOf(id_pw[0])
    return index !== -1
        ? (db[index][1] === id_pw[1]
           ? 'login'
           : 'wrong pw')
        : 'fail'
}
