function solution(my_string, m, c) {
    let str = ''
    for(let i = c-1; i< my_string.length; i += m){
        str += my_string[i]
    }
    return str
}