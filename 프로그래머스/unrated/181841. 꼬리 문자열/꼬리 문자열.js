function solution(str_list, ex) {
    return str_list.reduce((a,c) => RegExp(ex).test(c) ? a : a+c , '')
}