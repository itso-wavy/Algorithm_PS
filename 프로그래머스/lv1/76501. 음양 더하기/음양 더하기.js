function solution(absolutes, signs) {
    return signs.map((v, i) => v ? absolutes[i] : 0 - absolutes[i]).reduce((a,c) => a+c, 0)
}