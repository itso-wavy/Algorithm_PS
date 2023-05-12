function solution(spell, dic) {
    return dic.some(i => [...i].sort().join('') === spell.sort().join('')) ? 1 : 2
}