function solution(s) {
    return (s > 0 ? Number(s.replace('+', '')) : 0-Number(s.replace('-', '')))
}