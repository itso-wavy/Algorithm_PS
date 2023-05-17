function solution(num_list) {
    let even = '';
    let odd = '';
    num_list.forEach(i => i%2===0 ? even+=i : odd+=i)
    return +even+ +odd
}