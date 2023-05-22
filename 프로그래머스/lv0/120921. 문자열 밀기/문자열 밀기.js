function solution(A, B) {
    // return A === B.slice(B.indexOf(A[0])) + B.slice(0, B.indexOf(A[0])) ? B.indexOf(A[0]) : -1
    let count = 0
    B = [...B]
    for(let i=0; i<A.length; i++) {
        if(A === B.join('')) return count
        count++
        B.push(B.shift())
    }
    return -1
}