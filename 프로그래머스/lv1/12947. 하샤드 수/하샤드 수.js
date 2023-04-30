function solution(x) {
    const sum = x.toString().split('').reduce((a,c)=>~~a+~~c)
    return x % sum === 0
}