function solution(str1, str2) {
    return RegExp(str1).test(str2) ? 1 : 0
}