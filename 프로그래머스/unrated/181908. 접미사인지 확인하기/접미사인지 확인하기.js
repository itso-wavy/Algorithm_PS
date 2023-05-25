function solution(my_string, is_suffix) {
    my_string = [...my_string].reverse().join('')
    is_suffix = [...is_suffix].reverse().join('')
    return +my_string.startsWith(is_suffix)
}