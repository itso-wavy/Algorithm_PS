function solution(my_str, n) {
    var answer = [];
    for(let i = 0; i < my_str.length; i = i+n) {
        answer.push(my_str.slice(i, i+n))
    }
    return answer;
    // return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}