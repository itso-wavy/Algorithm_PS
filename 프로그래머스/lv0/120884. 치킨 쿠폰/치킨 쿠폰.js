function solution(chicken) {
    let answer = 0
    const recur = chicken => {
        const servis = ~~(chicken/10)
        const rest = chicken%10
        answer += servis
        return servis+rest < 10 ? answer : recur(servis+rest)
    }
    return recur(chicken)
}