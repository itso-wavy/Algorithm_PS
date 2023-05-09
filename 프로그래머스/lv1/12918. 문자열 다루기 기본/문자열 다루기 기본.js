function solution(s) {
    s = s.replace('e','a')
    s = s.replace('0','1')
    
    return s.length === 4 || s.length === 6 ? (~~s ? true : false) : false
}