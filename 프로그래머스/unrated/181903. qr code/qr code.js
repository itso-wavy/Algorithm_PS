function solution(q, r, code) {
    let str = '';
    for(let i = r; i < code.length; i+=q){
        str += code[i]
    }
    return str;
}