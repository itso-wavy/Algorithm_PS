function solution(spell, dic) {
    let i;
    for(i=0; i<dic.length; i++) {
        const arr = spell.map(j => {
            return new RegExp(j).test(dic[i])
        })
        if(arr.includes(false)) continue;
        else return 1;
    } return 2;
}